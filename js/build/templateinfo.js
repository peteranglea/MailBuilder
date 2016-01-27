this["MailBuilder"] = this["MailBuilder"] || {};
this["MailBuilder"]["info"] = this["MailBuilder"]["info"] || {};
MailBuilder.info['default'] = {
  "name": "Default Theme",
  "author": "Peter Anglea <peter@peteranglea.com>",
  "components": {
    "blue-box-end": {
      "name": "Blue Box End"
    },
    "blue-box-start": {
      "name": "Blue Box Start"
    },
    "body-end": {
      "name": "Body End"
    },
    "body-start": {
      "name": "Body Start"
    },
    "bordered-text": {
      "name": "Bordered Text",
      "fields": {
        "text": {
          "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "type": "textarea",
          "label": "Text"
        }
      }
    },
    "bulleted-list": {
      "name": "Bulleted List",
      "fields": {
        "text": {
          "value": "Lorem ipsum dolor sit amet consectetur adipisicing elit\nSed do eiusmod tempor\nIncididunt ut labore et dolore magna aliqua",
          "type": "textarea",
          "label": "Text"
        }
      }
    },
    "button": {
      "name": "Button",
      "fields": {
        "text": {
          "value": "Click this button",
          "type": "text",
          "label": "Button Text"
        },
        "url": {
          "value": "http://www.google.com",
          "type": "text",
          "label": "URL"
        }
      }
    },
    "code": {
      "name": "Custom HTML",
      "fields": {
        "code": {
          "value": "",
          "type": "textarea",
          "label": "HTML"
        }
      }
    },
    "cover-photo": {
      "name": "Cover Photo",
      "fields": {
        "alt": {
          "value": "",
          "type": "text",
          "label": "Alt Text"
        },
        "url": {
          "value": "",
          "type": "text",
          "label": "Link URL"
        },
        "imgurl": {
          "value": "http://placehold.it/600x250",
          "type": "text",
          "label": "Image URL"
        }
      }
    },
    "footer": {
      "name": "Footer"
    },
    "header": {
      "name": "Header",
      "fields": {
        "preheader": {
          "value": "",
          "type": "text",
          "label": "Preheader"
        }
      }
    },
    "heading1": {
      "name": "Text Heading 1",
      "fields": {
        "text": {
          "value": "Lorem ipsum dolor sit amet",
          "type": "text",
          "label": "Text"
        }
      }
    },
    "heading2": {
      "name": "Text Heading 2",
      "fields": {
        "text": {
          "value": "Lorem ipsum dolor sit amet",
          "type": "text",
          "label": "Text"
        }
      }
    },
    "image": {
      "name": "Image",
      "fields": {
        "alt": {
          "value": "",
          "type": "text",
          "label": "Alt Text"
        },
        "url": {
          "value": "",
          "type": "text",
          "label": "Link URL"
        },
        "imgurl": {
          "value": "http://placehold.it/580x200",
          "type": "text",
          "label": "Image URL"
        }
      }
    },
    "headline": {
      "name": "Headline",
      "fields": {
        "heading": {
          "value": "Catchy headline goes here!",
          "type": "text",
          "label": "Heading"
        },
        "subheading": {
          "value": "",
          "type": "text",
          "label": "Sub-heading (optional)"
        }
      }
    },
    "left-image": {
      "name": "Left-Aligned Image",
      "fields": {
        "alt": {
          "value": "",
          "type": "text",
          "label": "Alt Text"
        },
        "url": {
          "value": "",
          "type": "text",
          "label": "Link URL"
        },
        "imgurl": {
          "value": "http://placehold.it/130x130",
          "type": "text",
          "label": "Image URL"
        }
      }
    },
    "line-break": {
      "name": "Line Break"
    },
    "numbered-list": {
      "name": "Numbered List",
      "fields": {
        "text": {
          "value": "Lorem ipsum dolor sit amet consectetur adipisicing elit\nSed do eiusmod tempor\nIncididunt ut labore et dolore magna aliqua",
          "type": "textarea",
          "label": "Text"
        }
      }
    },
    "paragraph": {
      "name": "Text Paragraph",
      "fields": {
        "text": {
          "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "type": "textarea",
          "label": "Text"
        }
      }
    },
    "right-image": {
      "name": "Right-Aligned Image",
      "fields": {
        "alt": {
          "value": "",
          "type": "text",
          "label": "Alt Text"
        },
        "url": {
          "value": "",
          "type": "text",
          "label": "Link URL"
        },
        "imgurl": {
          "value": "http://placehold.it/130x130",
          "type": "text",
          "label": "Image URL"
        }
      }
    }
  }
}
MailBuilder.info['mailbuilder-cerberus-fluid'] = {
  "name": "Cerberus (Fluid)",
  "components": {
    "body-close": {
      "name": "Body Close"
    },
    "body-open": {
      "name": "Body Open"
    },
    "button": {
      "name": "Button",
      "fields": {
      	"text": {
					"value": "A button",
					"type": "text",
					"label": "Button text"
      	},
      	"link": {
      		"value": "http://www.google.com",
      		"type": "text",
      		"label": "URL"
      	},
      	"color": {
      		"value": "#222222",
      		"type": "text",
      		"label": "Button color"
      	}
      }
    },
    "code": {
      "name": "Custom HTML",
      "fields": {
        "code": {
          "value": "",
          "type": "textarea",
          "label": "HTML"
        }
      }
    },
    "footer": {
    	"name": "Footer",
    	"fields": {
    		"companyname": {
    			"value": "Your Company Name",
    			"type": "text",
    			"label": "Company Name"
    		},
    		"companyaddress": {
    			"value": "123 Somewhere St., Metrocity, NY, 12345",
    			"type": "text",
    			"label": "Company Address"
    		},
    		"companyphone": {
    			"value": "(123) 456-7890",
    			"type": "text",
    			"label": "Company Phone"
    		}
    	}
    },
    "header": {
    	"name": "Header",
    	"fields": {
    		"preheader": {
    			"value": "",
    			"type": "text",
    			"label": "Preheader (optional)"
    		},
    		"bgcolor": {
    			"value": "#222222",
    			"type": "text",
    			"label": "Background color"
    		}
    	}
    },
    "hero-image": {
      "name": "Hero Image",
      "fields": {
        "alt": {
          "value": "",
          "type": "text",
          "label": "Alt Text"
        },
        "url": {
          "value": "",
          "type": "text",
          "label": "Link URL (optional)"
        },
        "src": {
          "value": "http://placehold.it/600x250",
          "type": "text",
          "label": "Image source"
        }
      }
    },
    "image": {
      "name": "Image",
      "fields": {
        "alt": {
          "value": "",
          "type": "text",
          "label": "Alt Text"
        },
        "url": {
          "value": "",
          "type": "text",
          "label": "Link URL (optional)"
        },
        "src": {
          "value": "http://placehold.it/600x250",
          "type": "text",
          "label": "Image source"
        }
      }
    },
    "line-break": {
      "name": "Line Break"
    },
    "logo": {
    	"name": "Logo",
    	"fields": {
    		"alt": {
    			"value": "",
    			"type": "text",
    			"label": "Alt text"
    		},
    		"url": {
    			"value": "",
					"type": "text",
					"label": "Link URL (optional)"
				},
				"src": {
					"value": "http://placehold.it/200x50",
					"type": "text",
					"label": "Image source (200px wide)"
				}
    	}
    },
    "one-column-open": {
    	"name": "One-Column Open"
    },
    "one-column-close": {
    	"name": "One-Column Close"
    },
    "paragraph": {
      "name": "Text Paragraph",
      "fields": {
        "text": {
          "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "type": "textarea",
          "label": "Text"
        }
      }
    }
	}
}