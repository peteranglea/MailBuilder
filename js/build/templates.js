this["MailBuilder"] = this["MailBuilder"] || {};
this["MailBuilder"]["templates"] = this["MailBuilder"]["templates"] || {};
this["MailBuilder"]["templates"]["default"] = this["MailBuilder"]["templates"]["default"] || {};

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"] = this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"] || {};

this["MailBuilder"]["templates"]["default"]["blue-box-end"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["blue-box-start"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<table bgcolor=\"#e5f6fd\" cellpadding=\"10\" cellspacing=\"0\" border=\"0\" width=\"100%\">\r\n	<tbody>\r\n		<tr>\r\n			<td>			";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["body-end"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "			</td>\n		</tr>\n	</tbody>\n</table>\n<!--[if (gte mso 9)|(IE)]>\n        </td>\n    </tr>\n</table>\n<![endif]-->\n\n<p style=\"margin-top: 0; margin-bottom: 0; font-size: 16px; line-height: 24px;\">&nbsp;</p>\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["body-start"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p style=\"margin-top: 0; margin-bottom: 0; font-size: 16px; line-height: 24px;\">&nbsp;</p>\n<!--[if (gte mso 9)|(IE)]>\n<table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n    <tr>\n        <td>\n<![endif]-->\n\n<table align=\"center\" bgcolor=\"#ffffff\" cellpadding=\"10\" cellspacing=\"0\" style=\"max-width: 600px\" width=\"100%\">\n	<tbody>\n		<tr>\n			<td>\n			";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["bordered-text"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\">\n	<tbody>\n		<tr>\n			<td height=\"2\" bgcolor=\"#00b5ef\"></td>\n		</tr>\n		<tr>\n			<td>\n			<table cellpadding=\"15\" cellspacing=\"0\" width=\"100%\" border=\"0\">\n				<tbody>\n					<tr>\n						<td>\n						<p style=\"margin-top: 0px; margin-bottom: 0px; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #333333;\">\n						"
    + ((stack1 = (helpers.paragraph || (depth0 && depth0.paragraph) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"paragraph","hash":{},"data":data})) != null ? stack1 : "")
    + "\n						</p>\n						</td>\n					</tr>\n				</tbody>\n			</table>\n			</td>\n		</tr>\n		<tr>\n			<td height=\"2\" bgcolor=\"#00b5ef\"></td>\n		</tr>\n	</tbody>\n</table>\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["bulleted-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul style=\"margin-top: 0; margin-bottom: 0;\">\n"
    + ((stack1 = (helpers["default-bullets"] || (depth0 && depth0["default-bullets"]) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"default-bullets","hash":{},"data":data})) != null ? stack1 : "")
    + "\n</ul>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["MailBuilder"]["templates"]["default"]["button"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n	<tbody>\n		<tr>\n			<td>\n			<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\n				<tbody>\n					<tr>\n						<td align=\"center\" style=\"border-radius: 5px;\" bgcolor=\"#e04125\"><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" style=\"font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 5px; padding: 12px 18px; border: 1px solid #e04125; display: inline-block;\" title=\""
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\"><b>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></a></td>\n					</tr>\n				</tbody>\n			</table>\n			</td>\n		</tr>\n	</tbody>\n</table>";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["code"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"code","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["cover-photo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!--[if (gte mso 9)|(IE)]>\n<table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n    <tr>\n        <td>\n<![endif]-->\n<table align=\"center\" bgcolor=\"#ffffff\" cellpadding=\"0\" cellspacing=\"0\" style=\"max-width: 600px\" width=\"100%\">\n	<tbody>\n		<tr>\n			<td>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = helpers.imgurl || (depth0 != null ? depth0.imgurl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgurl","hash":{},"data":data}) : helper)))
    + "\" style=\"max-width: 100%; height: auto;\" />"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>\n		</tr>\n	</tbody>\n</table>\n<!--[if (gte mso 9)|(IE)]>\n        </td>\n    </tr>\n</table>\n<![endif]-->\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<table bgcolor=\"#002244\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n	<tbody>\n		<tr>\n			<td align=\"center\"><img alt=\"Build Faith. Challenge Potential. Follow Christ.\" src=\"https://bju.hobsonsradius.com/crm/viewImage?id=982000000307007&amp;fileName=%2FEmail+Template%2Femail-footer.gif\" style=\"max-width: 100%; height: auto;\" /></td>\n		</tr>\n	</tbody>\n</table>\n\n<table bgcolor=\"#eff6fc\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n	<tbody>\n		<tr>\n			<td align=\"center\"><a href=\"http://www.facebook.com/bobjonesuniversity\" title=\"Follow us on Facebook\"><img alt=\"Facebook\" hspace=\"0\" src=\"https://bju.hobsonsradius.com/crm/viewImage?id=982000000307007&amp;fileName=%2FEmail+Template%2Ffacebook.png\" vspace=\"0\" /></a>&nbsp; <a href=\"http://www.twitter.com/bjuedu\" title=\"Follow us on Twitter\"><img alt=\"Twitter\" hspace=\"0\" src=\"https://bju.hobsonsradius.com/crm/viewImage?id=982000000307007&amp;fileName=%2FEmail+Template%2Ftwitter.png\" vspace=\"0\" /></a>&nbsp; <a href=\"http://www.instagram.com/bjuedu\" title=\"Follow us on Instagram\"><img alt=\"Instagram\" hspace=\"0\" src=\"https://bju.hobsonsradius.com/crm/viewImage?id=982000000307007&amp;fileName=%2FEmail+Template%2Finstagram.png\" vspace=\"0\" /></a></td>\n		</tr>\n	</tbody>\n</table>";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["header"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<style type=\"text/css\">\ndiv.preheader \n{ display: none !important; } \n</style>\n<div class=\"preheader\" style=\"font-size: 1px; display: none !important;\">"
    + ((stack1 = ((helper = (helper = helpers.preheader || (depth0 != null ? depth0.preheader : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"preheader","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.preheader : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<table bgcolor=\"#f0f6fa\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-bottom: 1px solid #C7D9DF;\" width=\"100%\">\n	<tbody>\n		<tr>\n			<td><!--[if (gte mso 9)|(IE)]>\n			<table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n			    <tr>\n			        <td>\n			<![endif]-->\n			<table align=\"center\" bgcolor=\"#f0f6fa\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"max-width: 600px;\" width=\"100%\">\n				<tbody>\n					<tr>\n						<td><!--<table align=\"right\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"270\">\n							<tbody>\n								<tr>\n									<td align=\"right\">\n									<p style=\"font-size: 10px; line-height: 15px; margin-bottom: 10px; font-family: Helvetica, Arial, sans-serif; color: #909399;\">&nbsp;</p>\n									</td>\n								</tr>\n							</tbody>\n						</table>-->\n						<table align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"215\">\n							<tbody>\n								<tr>\n									<td style=\"font-size: 12px;\"><img alt=\"Bob Jones University\" height=\"34\" src=\"https://bju.hobsonsradius.com/crm/viewImage?id=982000000307007&amp;fileName=%2FEmail+Template%2Flogo.png\" width=\"214\" /></td>\n								</tr>\n							</tbody>\n						</table>\n						</td>\n					</tr>\n				</tbody>\n			</table>\n			<!--[if (gte mso 9)|(IE)]>\n			        </td>\n			    </tr>\n			</table>\n			<![endif]--></td>\n		</tr>\n	</tbody>\n</table>";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["heading1"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p style=\"font-size: 20px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #00b5ef; margin-top: 0px; margin-bottom: 0px;\"><b>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></p>\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["heading2"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p style=\"font-size: 18px; line-height: 24px; font-family: Helvetica, Arial, sans-serif; color: #001441; margin-top: 0px; margin-bottom: 0px;\"><b>"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></p>\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["headline"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p style=\"font-family: Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; color: #f0f6fa; margin-top: 0; margin-bottom: 0;\">"
    + ((stack1 = ((helper = (helper = helpers.subheading || (depth0 != null ? depth0.subheading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subheading","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n                        </td>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<table bgcolor=\"#ffffff\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n    <tbody>\n        <tr>\n            <td><!--[if (gte mso 9)|(IE)]>\n            <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n                <tr>\n                    <td>\n            <![endif]-->\n            <table align=\"center\" bgcolor=\"#00b5ef\" cellpadding=\"20\" cellspacing=\"0\" style=\"max-width: 600px\" width=\"100%\">\n                <tbody>\n                    <tr>\n                        <td align=\"center\">\n                        <p style=\"font-family: Helvetica, Arial, sans-serif; font-size: 24px; line-height: 36px; color: #ffffff; margin-top: 0; margin-bottom: 0;\"><b>"
    + ((stack1 = ((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"heading","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</b></p>\n                        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subheading : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                    </tr>\n                </tbody>\n            </table>\n            <!--[if (gte mso 9)|(IE)]>\n                    </td>\n                </tr>\n            </table>\n            <![endif]--></td>\n        </tr>\n    </tbody>\n</table>";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\">\n	<tbody>\n		<tr>\n			<td align=\"center\">\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = helpers.imgurl || (depth0 != null ? depth0.imgurl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgurl","hash":{},"data":data}) : helper)))
    + "\" style=\"max-width: 100%; height: auto;\" />"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["left-image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<table cellpadding=\"0\" cellspacing=\"0\" align=\"left\" border=\"0\">\n	<tbody>\n		<tr>\n			<td>\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = helpers.imgurl || (depth0 != null ? depth0.imgurl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgurl","hash":{},"data":data}) : helper)))
    + "\" style=\"max-width: 100%; height: auto;\" />"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</td>\n            <td width=\"10\">&nbsp;</td>\n		</tr>\n	</tbody>\n</table>\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["line-break"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p style=\"margin-top: 0; margin-bottom: 0; font-size: 16px; line-height: 24px;\">&nbsp;</p>\n";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["numbered-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ol style=\"margin-top: 0; margin-bottom: 0;\">\n"
    + ((stack1 = (helpers["default-bullets"] || (depth0 && depth0["default-bullets"]) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"default-bullets","hash":{},"data":data})) != null ? stack1 : "")
    + "\n</ol>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["MailBuilder"]["templates"]["default"]["paragraph"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p style=\"margin-top: 0; margin-bottom: 0; font-size: 16px; line-height: 24px; font-family: Helvetica, Arial, sans-serif;\">"
    + ((stack1 = (helpers["default-paragraph"] || (depth0 && depth0["default-paragraph"]) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"default-paragraph","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>";
},"useData":true});

this["MailBuilder"]["templates"]["default"]["right-image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<table cellpadding=\"0\" cellspacing=\"0\" align=\"right\" border=\"0\">\n	<tbody>\n		<tr>\n			<td width=\"10\">&nbsp;</td>\n            <td>\n				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = helpers.imgurl || (depth0 != null ? depth0.imgurl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgurl","hash":{},"data":data}) : helper)))
    + "\" style=\"max-width: 100%; height: auto;\" />"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n			</td>\n		</tr>\n	</tbody>\n</table>\n";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["body-close"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "			</table>\n            <!-- Email Body : END -->";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["body-open"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "			<!-- Email Body : BEGIN -->\n            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" bgcolor=\"#ffffff\" width=\"100%\" style=\"max-width: 600px;\">\n            ";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["button"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- Button : Begin -->\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" style=\"Margin: auto;\">\n    <tr>\n        <td style=\"border-radius: 3px; background: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "; text-align: center;\" class=\"button-td\">\n            <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" style=\"background: "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "; border: 15px solid "
    + alias4(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"color","hash":{},"data":data}) : helper)))
    + "; padding: 0 10px;color: #ffffff; font-family: sans-serif; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;\" class=\"button-a\">\n                <!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "<!--[if mso]>&nbsp;&nbsp;&nbsp;&nbsp;<![endif]-->\n            </a>\n        </td>\n    </tr>\n</table>\n<!-- Button : END -->";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["code"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"code","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["footer"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<br><span class=\"mobile-link--footer\">"
    + container.escapeExpression(((helper = (helper = helpers.companyaddress || (depth0 != null ? depth0.companyaddress : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"companyaddress","hash":{},"data":data}) : helper)))
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<br><span class=\"mobile-link--footer\">"
    + container.escapeExpression(((helper = (helper = helpers.companyphone || (depth0 != null ? depth0.companyphone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"companyphone","hash":{},"data":data}) : helper)))
    + "</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "            <!-- Email Footer : BEGIN -->\n            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 680px;\">\n                <tr>\n                    <td style=\"padding: 40px 10px;width: 100%;font-size: 12px; font-family: sans-serif; mso-height-rule: exactly; line-height:18px; text-align: center; color: #888888;\">\n                        <webversion style=\"color:#cccccc; text-decoration:underline; font-weight: bold;\">View as a Web Page</webversion>\n                        <br><br>\n                        "
    + container.escapeExpression(((helper = (helper = helpers.companyname || (depth0 != null ? depth0.companyname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"companyname","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.companyaddress : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.companyphone : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                        <br><br>\n                        <unsubscribe style=\"color:#888888; text-decoration:underline;\">unsubscribe</unsubscribe>\n                    </td>\n                </tr>\n            </table>\n            <!-- Email Footer : END -->\n\n            <!--[if (gte mso 9)|(IE)]>\n            </td>\n            </tr>\n            </table>\n            <![endif]-->\n        </div>\n    </center>\n</td></tr></table>\n</body>\n</html>\n";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["header"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <!-- Visually Hidden Preheader Text : BEGIN -->\n        <div style=\"display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family: sans-serif;\">\n            "
    + container.escapeExpression(((helper = (helper = helpers.preheader || (depth0 != null ? depth0.preheader : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"preheader","hash":{},"data":data}) : helper)))
    + "\n        </div>\n        <!-- Visually Hidden Preheader Text : END -->\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n	<meta charset=\"utf-8\"> <!-- utf-8 works for most cases -->\n	<meta name=\"viewport\" content=\"width=device-width\"> <!-- Forcing initial-scale shouldn't be necessary -->\n	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <!-- Use the latest (edge) version of IE rendering engine -->\n	<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->\n\n	<!-- Web Font / @font-face : BEGIN -->\n	<!-- NOTE: If web fonts are not required, lines 9 - 26 can be safely removed. -->\n	\n	<!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->\n	<!--[if mso]>\n		<style>\n			* {\n				font-family: sans-serif !important;\n			}\n		</style>\n	<![endif]-->\n	\n	<!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->\n	<!--[if !mso]><!-->\n		<!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->\n	<!--<![endif]-->\n\n	<!-- Web Font / @font-face : END -->\n	\n  	<!-- CSS Reset -->\n    <style type=\"text/css\">\n\n		/* What it does: Remove spaces around the email design added by some email clients. */\n		/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\n        html,\n        body {\n            Margin: 0 !important;\n            padding: 0 !important;\n            height: 100% !important;\n            width: 100% !important;\n        }\n        \n        /* What it does: Stops email clients resizing small text. */\n        * {\n            -ms-text-size-adjust: 100%;\n            -webkit-text-size-adjust: 100%;\n        }\n        \n        /* What it does: Forces Outlook.com to display emails full width. */\n        .ExternalClass {\n            width: 100%;\n        }\n        \n        /* What is does: Centers email on Android 4.4 */\n        div[style*=\"margin: 16px 0\"] {\n            margin:0 !important;\n        }\n        \n        /* What it does: Stops Outlook from adding extra spacing to tables. */\n        table,\n        td {\n            mso-table-lspace: 0pt !important;\n            mso-table-rspace: 0pt !important;\n        }\n                \n        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\n        table {\n            border-spacing: 0 !important;\n            border-collapse: collapse !important;\n            table-layout: fixed !important;\n            Margin: 0 auto !important;\n        }\n        table table table {\n            table-layout: auto; \n        }\n        \n        /* What it does: Uses a better rendering method when resizing images in IE. */\n        img {\n            -ms-interpolation-mode:bicubic;\n        }\n        \n        /* What it does: Overrides styles added when Yahoo's auto-senses a link. */\n        .yshortcuts a {\n            border-bottom: none !important;\n        }\n        \n        /* What it does: A work-around for iOS meddling in triggered links. */\n        .mobile-link--footer a,\n        a[x-apple-data-detectors] {\n            color:inherit !important;\n            text-decoration: underline !important;\n        }\n      \n    </style>\n    \n    <!-- Progressive Enhancements -->\n    <style>\n        \n        /* What it does: Hover styles for buttons */\n        .button-td,\n        .button-a {\n            transition: all 100ms ease-in;\n        }\n        .button-td:hover,\n        .button-a:hover {\n            background: #555555 !important;\n            border-color: #555555 !important;\n        }\n\n    </style>\n\n</head>\n<body width=\"100%\" height=\"100%\" bgcolor=\""
    + alias4(((helper = (helper = helpers.bgcolor || (depth0 != null ? depth0.bgcolor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bgcolor","hash":{},"data":data}) : helper)))
    + "\" style=\"Margin: 0;\">\n<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" height=\"100%\" width=\"100%\" bgcolor=\""
    + alias4(((helper = (helper = helpers.bgcolor || (depth0 != null ? depth0.bgcolor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bgcolor","hash":{},"data":data}) : helper)))
    + "\" style=\"border-collapse:collapse;\"><tr><td valign=\"top\">\n    <center style=\"width: 100%;\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.preheader : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div style=\"max-width: 600px;\">\n            <!--[if (gte mso 9)|(IE)]>\n            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"600\" align=\"center\">\n            <tr>\n            <td>\n            <![endif]-->";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["hero-image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<!-- Hero Image, Flush : BEGIN -->\n                <tr>\n					<td>\n						"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" width=\"600\" height=\"\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" border=\"0\" align=\"center\" style=\"width: 100%; max-width: 600px;\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					</td>\n                </tr>\n                <!-- Hero Image, Flush : END -->\n";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" style=\"border: 0;max-width: 100%;\" />"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["line-break"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p style=\"font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555; margin: 0; padding: 0;\">&nbsp;</p>";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["logo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<!-- Email Header : BEGIN -->\n            <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"100%\" style=\"max-width: 600px;\">\n				<tr>\n					<td style=\"padding: 20px 0; text-align: center\">\n						"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" width=\"200\" height=\"\" alt=\""
    + alias4(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" border=\"0\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n					</td>\n				</tr>\n            </table>\n            <!-- Email Header : END -->";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["one-column-close"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "								</td>\n							</tr>\n                        </table>\n                    </td>\n                </tr>\n                <!-- 1 Column Text : END -->";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["one-column-open"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "			<!-- 1 Column Text : BEGIN -->\n                <tr>\n                    <td>\n                        <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                        	<tr>\n	                            <td style=\"padding: 40px; font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555;\">";
},"useData":true});

this["MailBuilder"]["templates"]["mailbuilder-cerberus-fluid"]["paragraph"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p style=\"font-family: sans-serif; font-size: 15px; mso-height-rule: exactly; line-height: 20px; color: #555555; margin: 0; padding: 0;\">"
    + ((stack1 = (helpers["mailbuilder-cerberus-fluid-paragraph"] || (depth0 && depth0["mailbuilder-cerberus-fluid-paragraph"]) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.text : depth0),{"name":"mailbuilder-cerberus-fluid-paragraph","hash":{},"data":data})) != null ? stack1 : "")
    + "</p>";
},"useData":true});