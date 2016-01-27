module.exports = function(grunt) {
	grunt.initConfig({
		handlebars: {
			compile: {
				options: {
					namespace: function(filename) {
						var foldername = filename.match(/templates\/(.*)\//)[1];
						return 'MailBuilder.templates.' + foldername;
					},
					processName: function(filename) {
						return filename.match(/templates\/.*\/(.*)\.handlebars/)[1];
					}
				},
				files: {
					'js/build/templates.js' : ['templates/**/*.handlebars']
				}
			}
		},
		concat: {
			templateInfo: {
				options: {
					banner: 'this["MailBuilder"] = this["MailBuilder"] || {};\nthis["MailBuilder"]["info"] = this["MailBuilder"]["info"] || {};\n',
					process: function(src, filename) {
						foldername = filename.match(/templates\/(.*)\/info.json/)[1];
						return 'MailBuilder.info[\'' + foldername + '\'] = ' + src;
					}
				},
				files: {
					'js/build/templateinfo.js' : ['templates/**/info.json']
				}
			},
			templateHelpers: {
				files: {
					'js/build/templatehelpers.js' : ['templates/**/helpers.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['handlebars','concat']);
};