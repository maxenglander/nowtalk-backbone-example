define([
    'backbone',
    'underscore',
    'text!./TitleBar.html',
], function (
    Backbone,
    _,
    template
) {
    return Backbone.View.extend({
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        template: _.template(template)
    });
});
