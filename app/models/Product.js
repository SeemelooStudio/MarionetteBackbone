define(["jquery", "backbone"],
    function ($, Backbone) {
        // Creates a new Backbone Model class object
        var Product = Backbone.Model.extend({

            defaults : {
                productId : 0,
                productTypeId : 0,
                storeId : 0,
                title : '',
                description : '',
                detailedDescription : '',
                imageUrl: ''
            }

        });

        return Product;
    }

);