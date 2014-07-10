define(['app', 'backbone', 'marionette', 'mustache', 'jquery', 'text!templates/store.html', 'models/Model'],
    function (App, Backbone, Marionette, Mustache, $, template, Model) {
        return Backbone.Marionette.ItemView.extend({
            template: template,
            initialize: function () {
            },
            model: new Model({
            }),
            onRender: function () {
                this.$el.html(Mustache.render(this.template));
            }
        });
    });