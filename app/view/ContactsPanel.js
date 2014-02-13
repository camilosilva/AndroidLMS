Ext.define('AndroidLMS.view.ContactsPanel', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contactspanel',
    
    config: {        
        loadingText: 'Loading contacts.',
        emptyText: '<pre><div class="notes-list-empty-text">No contacts found.</div></pre>',
        onItemDisclosure: true,
        grouped: true,
        itemTpl: '<pre><div class="list-item-title">{title}</div><div class="list-item-narrative">{narrative}</div></pre>'
    },
    
    initialize:function(){
        this.callParent(arguments);
    }
});
