define([
    'backbone'
], function (
    Backbone
) {
    return Backbone.Model.extend({
        getStatus: function () {
            return this.get('active') ? 'active' : 'away';
        }
    });
});
