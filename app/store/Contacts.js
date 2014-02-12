Ext.define("AndroidLMS.store.Contacts", {
    extend: "Ext.data.Store",
    config: {
        model: "AndroidLMS.model.Contact",
        data: [
            {title: "CTX-000", narrative: "XenApp Test Course"},
            {title: "CTX-001", narrative: "XenMobile Test Course"},
            {title: "CTX-002", narrative: "XenDesktop Test Course"}
        ]
    },
    sorters: [{property: 'dateCreated', direction:'DESC'}]
});