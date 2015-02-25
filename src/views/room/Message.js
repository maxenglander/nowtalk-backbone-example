define([
    'backbone',
    'underscore',
    'text!./Message.html'
], function (
    Backbone,
    _,
    template
) {
    return Backbone.View.extend({
        attributes: {
            tagName: 'div'
        },
        render: function () {
            this.$el.html(this.template({
                message: this.model.get('message'),
                userActive: this.model.get('user').getStatus(),
                userName: this.model.get('user').get('name')
            }));
            return this;
        },
        template: _.template(template)
    });
});
