require.config({
    baseUrl: 'static/js',
    paths: {
        jquery: 'jquery-3.1.1.min',
        UI:     'uikit/uikit'

    },
    shim: {

        uikit: {
            deps: ['jquery'],
            exports: 'UI'
        }
    }
});

window.kh_dict = {};
