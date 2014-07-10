// Kick off the application.
require(["app", "routers/Router", "controllers/Controller", "backbone", "marionette"], function (App, Router, Controller, Backbone, Marionette) {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    // app.router = new Router();

    // Trigger the initial route and enable HTML5 History API support, set the
    // root folder to '/' by default.  Change in app.js.

    App.appRouter = new Router({
        controller: new Controller()
    });


    App.start();

});