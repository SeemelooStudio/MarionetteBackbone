define(['app', 'backbone', 'marionette', 'views/HeaderView', 'views/FooterView', 'views/StoreView'],
    function (App, Backbone, Marionette, HeaderView, FooterView, StoreView) {
        return Backbone.Marionette.Controller.extend({
            initialize: function (options) {
                App.headerRegion.show(new HeaderView());
                App.footerRegion.show(new FooterView());
            },
            //gets mapped to in AppRouter's appRoutes
            index: function () {
                App.mainRegion.show(new StoreView());
            }
        });
    });