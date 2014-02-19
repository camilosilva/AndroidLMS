Ext.define("AndroidLMS.model.CitrixContact", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'dateCreated', type:'date', dateFormat: 'c'},
            {name: 'title', type:'string'},
            {name: 'narrative', type:'string'}
        ],
        //add the proxy here
        validations: [
            {type: 'presence', field: 'id'},
            {type: 'presence', field: 'dateCreated'},
            {type: 'presence', field: 'title', message: 'Enter a title for this note'}
        ],
    },
    
});