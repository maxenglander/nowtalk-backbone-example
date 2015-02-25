define([
    'backbone',
    'underscore',
    'text!./AddMessage.html'
], function (
    Backbone,
    _,
    template
) {
    return Backbone.View.extend({
        events: {
            'keyup textarea': 'submit'
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        submit: function (e) {
            if (13/*enter*/ !== e.keyCode) return;
            this.trigger('submit', this.$('textarea').val());
            this.$('textarea').val('');
        },
        template: _.template(template)
    });
});
