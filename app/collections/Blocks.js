define(["jquery", "backbone", "models/Block"],

    function ($, Backbone, Block) {

        var Blocks = Backbone.Collection.extend({

            model : Block

        });

        return Blocks;
    }

);