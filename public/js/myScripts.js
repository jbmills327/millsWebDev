angular.module("MyApp")
    .controller("MainCtrl", mainController);

mainController.$inject = ["$http", "millsfactory"];

function mainController($http, millsfactory) {
    var main = this;

    main.greeting = "What up yo";

    main.scrollQuote = function(e) {
        console.log("This is firing and e is: ", e);
        document.querySelector(e).scrollIntoView({
            behavior: "smooth"
        });

    }

    // main.nasa = {};
    //
    //
    // main.photo = function() {
    //     millsfactory.getNasa()
    //         .then(function(returnData) {
    //             console.log("This is the returnData", returnData);
    //             main.nasa = returnData.data;
    //             console.log("This is main.nasa", main.nasa);
    //         }).catch(function(err) {
    //             console.log("This is the error", err);
    //         })
    // }
    //
    // main.photo();
}
