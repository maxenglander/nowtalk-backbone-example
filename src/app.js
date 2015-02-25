define([
    'jquery', 
    'views/App',
    'collections/Messages',
    'models/Message',
    'models/User'
], function (
    $, 
    AppView,
    MessagesCollection,
    MessageModel,
    UserModel
) {
    $(document).ready(function () {
        var appView,
            messagesCollection,
            userModel;

        userModel = new UserModel({
            active: true,
            name: 'Jane Doe'
        });

        appView = new AppView({
            user: userModel
        });

        messagesCollection = new MessagesCollection([ ]);

        messagesCollection.on('add', function (message) {
            appView.addMessage(message);
        });

        appView.on('submit', function (text) {
            messagesCollection.add(new MessageModel({
                user: userModel,
                message: text 
            }));
        });

        /* Mock messages loading from server */
        messagesCollection.add(new MessageModel({
            message: 'Hello, world!',
            user: new UserModel({
                active: false,
                name: 'John Doe'
            })
        }));

        $(document).find('body').append(appView.render().el);
    });
});
