Ext.define('AndroidLMS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to the LMS App'
		    },
		    {
		    xtype: "button",
		    text: "View Contacts",
		    ui: "action",
		    id:"new-contact-btn"
		    }
		],

                html: [
		    "<a href=\"javascript:navigator.notification.alert('Congratulations, you are ready to work with Sencha Touch 2 and PhoneGap!')\">Click me</a> to see a native Android Alert message",		    
		].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            },
	    {
		xtype: 'nestedlist',
		title: 'Blog',
		iconCls: 'star',
		displayField: 'title',
		store: {
		    type: 'tree',
		    fields: ['title','link','author','contentSnippet','content',
			    {name: 'leaf', defaultValue: true}	     
		    ],
		    
		    root: {leaf:false},
		    proxy: {
			type: 'jsonp',
			url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
			reader: {
			    type: 'json',
			    rootProperty: 'responseData.feed.entries'
			}
		    }
		},
		
		detailCard: {
		    xtype: 'panel',
		    scrollable: true,
		    styleHtmlContents: true
		},
		
		listeners: {
		    itemtap: function(nestedList, list, index, element, post){
			this.getDetailCard().setHtml(post.get('contentSnippet'));
		    }
		}
	    },
	    {
		title: 'Contact',
		iconCls: 'user',
		xtype: 'formpanel',
		url: 'contact.php',
		layout: 'vbox',
		
		items: [
		    {
			xtype: 'fieldset',
			title: 'Contact Us',
			instructions: '(email address is optional)',
			items: [
			    {
				xtype: 'textfield',
				label: 'Name'
			    },
			    {
				xtype: 'emailfield',
				label: 'Email'
			    },
			    {
				xtype: 'textareafield',
				label: 'Message'
			    }
			]	
		    },
		    {
			xtype: 'button',
			text: 'Send',
			ui: 'confirm',
			handler: function(){
			    this.up('formpanel').submit();
			}
		    }
		]
	    }
        ]
    }
});
