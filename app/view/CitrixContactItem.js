Ext.define("AndroidLMS.view.CitrixContactItem", {
    extend: 'Ext.dataview.List',
    alias: 'widget.citrixitem',
    
    config: {        
        loadingText: 'Loading contacts.',
        emptyText: '<pre><div class="notes-list-empty-text">No contacts found.</div></pre>',
        onItemDisclosure: true,
        grouped: true,
        itemTpl: '<pre><div class="list-item-title">{givenName} {familyName}</div><div class="list-item-narrative">Company Name</div></pre>'
    },
    
    initialize:function(){
        this.callParent(arguments);
    }
});