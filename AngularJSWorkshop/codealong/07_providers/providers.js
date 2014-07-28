/* globals angular, console */
var restaurant = angular.module("restaurant", []);

restaurant.factory("mealFactory", function () {
    "use strict";
    return {
        meals: [
            {name: "Fish and chips", ingredients: ["fish", "chips"]},
            {name: "Bacon cheeseburger", ingredients: ["bacon", "cheese", "burger"]},
            {name: "Chicken strips", ingredients: ["chicken", "strips"]}
        ]
    };
});

restaurant.service("orderService", function () {
    "use strict";
    var orders = [];

    return {
        submitOrder: function (meal) {
            orders.push(angular.copy(meal));
            console.log(orders);
        },
        getOpenOrders: function () {
            return orders;
        }
    };
});

restaurant.service("inventoryService", function () {
    "use strict";
    var ingredients = {};

    return {
        initialize: function(meals, initialIngredientQuantity) {
            for (var mealIndex in meals) {
                if (meals.hasOwnProperty(mealIndex)) {
                    var meal = meals[mealIndex];
                    for (var ingredientIndex in meal.ingredients) {
                        if (meal.ingredients.hasOwnProperty(ingredientIndex)) {
                            ingredients[meal.ingredients[ingredientIndex]] = {
                                name: meal.ingredients[ingredientIndex],
                                quantityOnHand: initialIngredientQuantity,
                                replenishQuantity: 1
                            };
                        }
                    }
                }
            }
        },
        ingredientsAvailable: function (meal) {
            for (var ingredientIndex in meal.ingredients) {
                if (meal.ingredients.hasOwnProperty(ingredientIndex)) {
                    if (ingredients[meal.ingredients[ingredientIndex]].quantityOnHand == 0) {
                        return false;
                    }
                }
            }
            return true;
        },
        consumeIngredients: function (meal) {
            for (var ingredientIndex in meal.ingredients) {
                if (meal.ingredients.hasOwnProperty(ingredientIndex)) {
                    ingredients[meal.ingredients[ingredientIndex]].quantityOnHand--;
                }
            }
        },
        replenish: function (ingredient, quantity) {
            if (quantity > 0) {
                ingredient.quantityOnHand += quantity;
            } else {
                alert("Must order at least one.");
            }
        },
        ingredients: ingredients
    };
});

restaurant.controller("RestaurantCtrl", function ($scope, mealFactory, orderService, inventoryService) {
    "use strict";
    var app = this;
    app.mealFactory = mealFactory;
    app.inventoryService = inventoryService;
    app.orderService = orderService;

    inventoryService.initialize(mealFactory.meals, 10);

    app.submitOrder = function (meal) {
        if (inventoryService.ingredientsAvailable(meal)) {
            inventoryService.consumeIngredients(meal);
            orderService.submitOrder(meal);
        } else {
            alert("Ingredients not available!");
        }
    };
});
