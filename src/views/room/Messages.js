define([
    'backbone',
    'underscore',
    'text!./Messages.html',
    './Message.js',
], function (
    Backbone,
    _,
    template,
    MessageView
) {
    return Backbone.View.extend({
        add: function (messageModel) {
            this.messages.push(new MessageView({
                model: messageModel
            }));
            this.render();
        },
        messages: [],
        render: function () {
            this.$el.html(this.template());
            for (var i = 0; i < this.messages.length; i++) {
                this.$el.append(this.messages[i].render().$el);
            }
            this.$el.scrollTop(this.$el.height());
            return this;
        },
        template: _.template(template)
    });
});
