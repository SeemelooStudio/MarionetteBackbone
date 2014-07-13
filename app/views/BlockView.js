define(['backbone', 'marionette', 'mustache', 'jquery', 'text!templates/block.html'],
    function (Backbone, Marionette, Mustache, $, template) {
        var BlockView = Backbone.Marionette.ItemView.extend({
            template: template,
            tagName: 'li',
            template: '#template-todoItemView',

            ui: {
                edit: '.edit'
            },

            events: {
            },
            modelEvents: {

            },
            initialize: function () {
            },
            onRender: function () {
                this.$el.html(Mustache.render(this.template));
            }
        });

        return BlockView;
    });
