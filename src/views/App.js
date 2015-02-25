define([
    'backbone',
    'underscore',
    'text!./App.html',
    'text!./style.css',
    'models/Message',
    './room/AddMessage.js',
    './room/Messages.js',
    './TitleBar.js',
], function (
    Backbone,
    _,
    template,
    stylesheet,
    MessageModel,
    RoomAddMessageView,
    RoomMessagesView,
    TitleBarView
) {
    var templateFunction;

    templateFunction = _.template(template);

    return Backbone.View.extend({
        addMessage: function (messageModel) {
            this.subviews.roomMessagesView.add(messageModel);
        },
        attributes: {
            id: 'nowtalk-app',
            tagName: 'div'
        },
        initialize: function (options) {
            var roomAddMessageView,
                roomMessagesView,
                titleBarView;

            titleBarView = new TitleBarView({
                id: 'nowtalk-title-bar'
            });

            roomMessagesView = new RoomMessagesView({
                id: 'nowtalk-room-messages'
            });

            roomAddMessageView = new RoomAddMessageView({
                id: 'nowtalk-room-add-message'
            });

            roomAddMessageView.on('submit', function (text) {
                this.trigger('submit', text);
            }.bind(this));

            this.subviews['titleBarView'] = titleBarView;
            this.subviews['roomMessagesView'] = roomMessagesView;
            this.subviews['roomAddMessageView'] = roomAddMessageView;
        },
        render: function () {
            this.$el.html(this.template());
            for (key in this.subviews) {
                this.$el.append(this.subviews[key].render().el);
            }
            return this;
        },
        subviews: [],
        template: function (settings) {
            settings = settings || {};
            settings['style'] = stylesheet;
            return templateFunction(settings);
        }
    }, []);
});
