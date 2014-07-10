define(['backbone', 'marionette', 'mustache', 'jquery', 'text!templates/header.html'],
    function (Backbone, Marionette, Mustache, $, template) {
        return Backbone.Marionette.ItemView.extend({
            template: template,
            initialize: function () {
            },
            onRender: function () {
                this.$el.html(Mustache.render(this.template));
            }
        });
    });