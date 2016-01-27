Handlebars.registerHelper('default-paragraph', function(data) {
  var returnValue = data.replace(/\n/g, '<br />');
  var returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
  return returnValue;
});

Handlebars.registerHelper('default-bullets', function(data) {
  var returnValue = data.replace(/^/mg, '<li style="margin-top: 0; margin-bottom: 0; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #333333;">').replace(/$/mg, '</li>');
  return returnValue;
});
Handlebars.registerHelper('mailbuilder-cerberus-fluid-paragraph', function(data) {
  var returnValue = data.replace(/\n/g, '<br />');
  var returnValue = returnValue.replace(/<(\/?)(script)(\s*\/?)>/gi, '&lt;$1$2$3&gt;');
  return returnValue;
});