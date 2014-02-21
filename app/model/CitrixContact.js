Ext.define("AndroidLMS.model.CitrixContact", {
    extend: "Ext.data.Model",
    requires: "AndroidLMS.proxy.CitrixContactProxy",
    config: {
        idProperty: 'id',
        fields: [
            {name: 'id', type: 'int'},
            //{name: 'dateCreated', type:'date', dateFormat: 'c'},
            {name:'givenName', type: 'string'},
            {name:'familyName', type: 'string'}
        ],
        proxy: {type:'citrixContactProxy'},
        
        validations: [
            {type: 'presence', field: 'id'},
            {type: 'presence', field: 'givenName'},
            {type: 'presence', field: 'familyName', message: 'Enter a lastname'}
        ],
        
    }
    
});