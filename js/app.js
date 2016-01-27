/**
 * TODO: Clean up this mess and better document it. Sorry, y'all.
 */

// Initialize Foundation
$(document).foundation();

this['MailBuilder'] = this['MailBuilder'] || {};

function generateToolbox() {
	$.each(MailBuilder.templates[mailTemplate], function(slug, object){
		$('#toolbox').append("<button class='button' data-widget='" + slug + "'><i class='fi-plus'></i> " + MailBuilder.info[mailTemplate]['components'][slug].name + "</button>");
	});
}

function addToEmail(slug, data, update) {
	if (typeof MailBuilder.templates[mailTemplate][slug] == "undefined") return;
	
	update = typeof update == "undefined" ? true : false;
	
	var li_class = typeof MailBuilder.info[mailTemplate]['components'][slug].fields != "undefined" ? 'has_inputs' : 'no_input';
	var li = $('<li/>').attr('data-component', slug).attr('class', li_class);
	// create component control
	var cc = $('<div class="component_controls clearfix"><span class="component_name">' + MailBuilder.info[mailTemplate]['components'][slug].name + '</span><span class="peek"></span><i class="fi-x"></i></div>');
	li.append(cc);

	// create component data
	if (typeof MailBuilder.info[mailTemplate]['components'][slug].fields != "undefined") {
		var cd = $('<div/>', {'class': 'component_data'});
		$.each(MailBuilder.info[mailTemplate]['components'][slug].fields, function(key, properties){
			var el;
			var value = data != null && typeof data[key] != "undefined" ? data[key] : properties.value;
			if (properties.type == 'textarea') el = $('<label>' + properties.label + '<textarea name="' + key + '">' + value + '</textarea></label>');
			else if (properties.type == 'text') el = $('<label>' + properties.label + '<input type="text" name="' + key + '" value="' + value + '" /></label>');
			cd.append(el);
		});
		if (slug != "code" && typeof MailBuilder.info[mailTemplate]['components']['code'] != "undefined") cd.append($('<a href="javascript:;" class="convert-html button tiny secondary">Convert to HTML</a>'));
		li.append(cd);
	}

	// add to list
	if ($('#list ul').length == 0) {
		$('#list').append('<ul/>');
	}
	$('#list ul').append(li);
	assignInteractions(li);

	if (update)	updatePreview();
}

function generateMailDocument() {
	var items = $('#list ul li');
	var obj = {};
	obj.template = mailDocument.template;
	obj.components = [];
	$.each(items, function() {
		var component = {};
		component.name = $(this).data('component');

		if ($(this).find('.component_data').length > 0) {
			var data = {}
			var fields = $(this).find('.component_data').find('input, textarea');
			$.each(fields, function(){
				data[$(this).attr('name')] = $(this).val();
			});
			component.data = data;
		}

		obj.components.push(component);
	});
	return obj;
}

function generatePreview() {
	var html = "";
	$.each(mailDocument.components, function(){
		if (typeof this.data == "undefined") html += MailBuilder.templates[mailTemplate][this.name]();
		else html += MailBuilder.templates[mailTemplate][this.name](this.data);
	});
	return html;
}

function updatePreview(save) {
	save = typeof save == "undefined" ? true : false;
	mailDocument = generateMailDocument();
	$('#iframe')[0].contentWindow.updatePreview();
	$('#code').val(generatePreview());
	//errorCheck();
	updatePeeks();
	if (save) saveEmail(window.location.search.match('id=([0-9]+)')[1], JSON.stringify(mailDocument));
}

function updatePeeks() {
	$.each($('.component_data'), function(){
		var peekvalue = $(this).find('input:first, textarea:first').val();
		$(this).parent('li').find('.peek').text(peekvalue.substr(0,50));
	});
}

function saveEmail(id, content) {
	$.post('email_save.php', {id: id, content: content}, function(data) {
		//console.log(data);
	});
}

function assignInteractions(el) {
	el.find('div.component_controls').click(function(){
		$(this).parent().find('div.component_data').slideToggle('fast');
	});
	el.find('i.fi-x').click(function(){
		$(this).parents('li:first').remove();
		updatePreview();
	});
	$('#list ul').sortable({
		distance: 10,
		handle: ".component_controls",
		// set item relative to cursor position
		onDragStart: function ($item, container, _super) {
	    	var offset = $item.offset(),
			pointer = container.rootGroup.pointer

			adjustment = {
				left: pointer.left - offset.left,
				top: pointer.top - offset.top
			}

			_super($item, container)
		},
		onDrag: function ($item, position) {
			$item.css({
				left: position.left - adjustment.left,
				top: position.top - adjustment.top
			});
		},
		onDrop: function(item, container, _super) {
			updatePreview();
			_super(item, container);
		}
	});
	el.find('input, textarea').blur(function(){
		updatePreview();
	});
	el.find('.convert-html').click(function(){
		var component = $(this).parents('li').data('component');
		// construct component context
		var data = {}
		var fields = $(this).parent('.component_data').find('input, textarea');
		$.each(fields, function(){
			data[$(this).attr('name')] = $(this).val();
		});
		// add new HTML component
		addToEmail('code', {code: MailBuilder.templates[mailTemplate][component](data)}, false);
		// swap it out
		$(this).parents('li').after($('#list ul li:last')).remove();
		updatePreview();
	})
}

/**
 * TODO
 */
/*function errorCheck() {}*/

function previewEmail(id) {
	$.get('fetch_email.php',{id: id}, function(data) {
		if (typeof data.content != "undefined") {
			mailDocument = JSON.parse(data.content);
			mailTemplate = data.template;
			$('#email_preview iframe')[0].contentWindow.updatePreview();
		}
	}, 'json');
}

$(document).ready(function(){
	
	if (typeof mailDocument != "undefined") generateToolbox();

	$('#toolbox button').click(function(){
		addToEmail($(this).data('widget'));
	});

	$('a.toolboxtoggle').click(function(){
		$('#toolbox').toggle();
		$(this).find('i').toggleClass('fi-minus').toggleClass('fi-plus');
	});

	// Initialize email layout with preloaded content
	if (typeof mailDocument != "undefined" && mailDocument.components != "undefined") {
		var num_components = mailDocument.components.length;
		var x = 1;
		$.each(mailDocument.components, function() {
			var data = typeof this.data == "undefined" ? null : this.data;
			addToEmail(this.name, data, false);
			if (x == num_components) {
				$('#iframe').load(function(){
					updatePreview(false);
				});
			}
			x++;
		});
	}
	
	// Help.md markdown conversion
	if (typeof markdown != "undefined") {
		$('#help .tabs-panel-inner').html(markdown.toHTML($('#help-markdown').val()));
	}
	
	//$('#update').click(updatePreview);

	$('#folder_list ul li > a').click(function(){
		$('#folder_list ul li a.active').removeClass('active');
		$(this).addClass('active');
		$('#email_preview iframe')[0].contentWindow.document.body.innerHTML = "";

		var folder = $(this).data('folder-id');
		$.get('fetch_emails.php', {folder: folder}, function(data) {
			//if (data.length > 0) {}
			$('#email_list ul').html('');
			$.each(data, function() {
				var html = '<li data-email-id="' + this.id + '" data-email-template="' + this.template + '"><a href="javascript:;" class="email_name">' + this.email_name + '</a>' +
					'<div class="email_options">' +
						'<a href="email.php?id=' + this.id + '" class="button small"><i class="fi-page-edit"></i> Edit</a>' +
						'<a href="javascript:;" class="button small copy" data-open="new_email_copy"><i class="fi-page-copy"></i> Copy</a>' +
						'<a href="javascript:;" class="button small secondary delete"><i class="fi-trash"></i> Delete</a>' +
					'</div>' +
				'</li>';
				$('#email_list ul').append(html);
			});

			$('#email_list ul li > a').click(function(){
				if ($(this).hasClass('active')) {
					$(this).removeClass('active').siblings('.email_options').toggle();
					$('#email_preview iframe')[0].contentWindow.document.body.innerHTML = "";
				} else {
					$('#email_list ul li a.active').removeClass('active').siblings('.email_options').toggle();
					$(this).addClass('active').siblings('.email_options').toggle();
					previewEmail($(this).parent('li').data('email-id'));
				}
			});

			$('#email_list .button.delete').click(function(){
				var email_name = $(this).parents('li').find('a.email_name').text();
				var email_id = $(this).parents('li').data('email-id');
				if (confirm('Are you sure you want to permanently delete "' + email_name + '"?')) {
					$.get('email_delete.php', {id: email_id}, function(data) {
						if (typeof data.id != "undefined") {
							$('#email_list li[data-email-id=' + data.id + ']').remove();
							$('#email_preview iframe')[0].contentWindow.document.body.innerHTML = "";
						} else {
							console.log(data);
							alert('There was an error deleting this email. Please try again.');
						} 
					}, 'json');
				}
			});

			$('#email_list .button.copy').click(function(){
				var email_id = $(this).parents('li').data('email-id');
				var template = $(this).parents('li').data('email-template');
				var email_name = $(this).parents('li').children('a').text();
				var folder = $('#folder_list a.active').data('folder-id');
				$('#new_email_copy').find('input[name=email_copy]').val(email_id);
				$('#new_email_copy').find('input[name=template]').val(template);
				$('#new_email_copy').find('input[name=email_name]').val(email_name + " Copy");
				$('#new_email_copy').find('select[name=folder]').val(folder);
			});

		}, 'json');
	});

	
	/**
	 * Make a new email modal
	 */
	$('#new_email .button').click(function(){
		var email_name = $('#new_email input[name=email_name]').val();
		var folder = $('#new_email select[name=folder]').val();
		var template = $('#new_email select[name=template]').val();

		if (email_name != "" && folder != "" && template != "") {
			$.get('email_add.php', {email_name: email_name, folder: folder, template: template}, function(data) {
				if (typeof data.id != "undefined") {
					window.location.href = "email.php?id=" + data.id;
				} else {
					alert('Error: please try again.');
				}
			}, 'json');
		} else {
			alert('Please supply a name, folder, and template for this email.');
		}
	});

	/**
	 * Make a new email copy modal
	 */
	$('#new_email_copy .button').click(function(){
		var email_name = $('#new_email_copy input[name=email_name]').val();
		var folder = $('#new_email_copy select[name=folder]').val();
		var email_copy = $('#new_email_copy input[name=email_copy]').val();
		var template = $('#new_email_copy input[name=template]').val();

		if (email_name != "" && folder != "" && email_copy != "") {
			$.get('email_add.php', {email_name: email_name, folder: folder, template: template, email_copy: email_copy}, function(data) {
				if (typeof data.id != "undefined") {
					window.location.href = "email.php?id=" + data.id;
				} else {
					alert('Error: please try again.');
				}
			}, 'json');
		} else {
			alert('Please supply a name and folder for this email.');
		}
	});


	/**
	 * Edit email modal
	 */
	$('#edit_email .button').click(function(){
		if ($(this).attr('disabled') == "disabled") return;

		$(this).attr('disabled', 'disabled');
		var id = window.location.search.match('id=([0-9]+)')[1];
		var email_name = $('#edit_email input[name=email_name]').val();
		var folder = $('#edit_email select[name=folder]').val();

		if (email_name != "" && folder != "") {
			$.get('email_save.php', {id: id, email_name: email_name, folder: folder}, function(data){
				if (typeof data.success != "undefined") {
					if (data.success == true) {
						window.location.reload();
					} else {
						$('#edit_email .button').attr('disabled', false);
						alert("Error: " + data.message);
					}
				}
			}, 'json');
		} else {
			alert('Please supply a name for the email and a destination folder.');
			$(this).attr('disabled', false);
		}
	});

});
