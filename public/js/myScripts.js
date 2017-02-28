angular.module("MyApp")
    .controller("MainCtrl", mainController);

mainController.$inject = ["$http", "millsfactory"];

function mainController($http, millsfactory) {
    var main = this;

    main.greeting = "What up yo";

    main.nasa = {};


    main.photo = function() {
        millsfactory.getNasa()
            .then(function(returnData) {
                console.log("This is the returnData", returnData);
                main.nasa = returnData.data;
                console.log("This is main.nasa", main.nasa);
            }).catch(function(err) {
                console.log("This is the error", err);
            })
    }

    main.photo();
}
