define(function (require, exports, module) {
    "use strict";

    // External dependencies.
    var Backbone = require("backbone");
    var Marionette = require("marionette");
    // The root path to run the application through.
    exports.root = "/";

    var app = new Backbone.Marionette.Application();
    app.addInitializer(function (options) {
        Backbone.history.start({ pushState: true, root: "/" });
    });

    app.addRegions({
        headerRegion: "header",
        mainRegion: "#main", 
        footerRegion: "footer"
    });

    // event aggrategator
    app.vent.on("openProductCollectionView", function (someData) {
        alert("Received", someData);
    });

    return app;

});
