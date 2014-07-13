define(["jquery", "backbone", "models/Product"],

    function ($, Backbone, Product) {

        var Products = Backbone.Collection.extend({
            model: Product
        });

        return Products;
    }

);