require.config({
    paths: {
        'backbone': 'vendor/backbone/backbone',
        'jquery': 'vendor/jquery/dist/jquery',
        'text': 'vendor/requirejs-text/text',
        'underscore': 'vendor/underscore/underscore'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});
