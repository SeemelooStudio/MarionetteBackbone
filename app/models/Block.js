define(["jquery", "backbone"],
    function ($, Backbone) {

        var Block = Backbone.Model.extend({

            defaults: {
                blockId: 0,
                title: '',
                description: '',
                detailedDescription: '',
                imageUrl: ''
            }

        });

        return Block;
    }

);