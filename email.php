<?php require_once "header.php";?>

<?php
// fetch email information, assuming valid ID
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
	$dbh = $pdo->prepare('SELECT emails.*, folders.name AS folder_name FROM emails INNER JOIN folders ON folders.id = emails.folder WHERE emails.id=?');
	$dbh->execute(array($_GET['id']));
	$email = $dbh->fetch(PDO::FETCH_ASSOC);
	if (!$email) exit();
}

if (!empty($email['content'])) {
	$content_decoded = json_decode($email['content']);
	$template = $email['template'];
?>
<script>
mailDocument = <?php echo $email['content'];?>;

mailTemplate = '<?php echo $template;?>';
</script>
<?php
}
?>

<div id="titlebar">
	<div>
		<p><span class="label secondary">Name</span> <span id="email_name"><?php echo htmlspecialchars($email['folder_name']);?> / <?php echo htmlspecialchars($email['email_name']);?></span> <a href="#" data-open="edit_email"><i class="fi-page-edit"></i></a></p>
	</div>
	<div>
		<p><span class="label secondary">Template</span> <span id="template_name"><?php echo htmlspecialchars($TEMPLATES[$email['template']]['name']);?></span><!-- <i class="fi-page-edit"></i>--></p>
	</div>
</div>

<div id="mailbuilder-list">
	<div id="list">
	</div>
</div>

<div id="mailbuilder-tabs">
	<ul class="tabs" data-tabs id="tabs">
		<li class="tabs-title is-active"><a href="#preview" aria-selected="true"><i class="fi-eye"></i> Preview</a></li>
		<li class="tabs-title"><a href="#codetab"><i class="fi-web"></i> HTML</a></li>
		<li class="tabs-title"><a href="#components"><i class="fi-plus"></i> Components</a></li>
		<?php
		if (isset($TEMPLATES[$email['template']]['helpFile'])) {
		?>
		<li class="tabs-title"><a href="#help"><i class="fi-info"></i> Help</a></li>
		<?php
		}
		?>
		<!-- 
		TODO: Error checking mechanism
		<li class="tabs-title"><a href="#alerts"><i class="fi-alert"></i> Errors</a></li>
		-->
	</ul>
	<div class="tabs-content" data-tabs-content="tabs">
		<div class="tabs-panel is-active" id="preview">
			<iframe id="iframe" src="iframe.php"></iframe>
		</div>
		<div class="tabs-panel" id="codetab">
			<textarea id="code" disabled="disabled" spellcheck="false"></textarea>
		</div>
		<div class="tabs-panel" id="components">
			<div id="toolbox" class="tabs-panel-inner">
			</div>
		</div>
		<?php
		if (isset($TEMPLATES[$email['template']]['helpFile'])) {
		?>
		<div class="tabs-panel" id="help">
			<script src="node_modules/markdown/lib/markdown.js"></script>
			<textarea style="display: none;" id="help-markdown"><?php echo file_get_contents($TEMPLATES[$email['template']]['helpFile']);?></textarea>
			<div class="tabs-panel-inner">
			</div>
		</div>
		<?php
		}
		?>
		<!-- 
		TODO: Error checking mechanism
		<div class="tabs-panel" id="alerts">
			<div style="padding: 1em;">
				<p>No errors found.</p>
			</div>
		</div>
		-->
	</div>
</div>



<!-- MODALS -->
<div id="edit_email" class="reveal small" data-reveal>
  <h2>Edit email</h2>
  
  <p><label>Email name <input type="text" name="email_name" value="<?php echo htmlspecialchars($email['email_name']);?>"/></label></p>

  <?php
  $query = "SELECT * FROM folders ORDER BY name ASC";
  $folders = $pdo->query($query)->fetchAll(PDO::FETCH_ASSOC);
  ?>
  <p><label>File under... 
    <select name="folder">
      <option value=""></option>
      <?php
      foreach ($folders as $folder) {
      	$selected = $folder['id'] == $email['folder'] ? " selected='selected'" : "";
        echo "<option value='" . $folder['id'] . "'" . $selected . ">" . $folder['name'] . "</option>\n";
      }
      ?>
    </select></label></p>

  <p><a class="button" href="javascript:;">Save</a></p>
  <button class="close-button" data-close aria-label="Close modal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<?php require_once "footer.php";?>