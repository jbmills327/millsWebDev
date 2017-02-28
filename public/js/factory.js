angular.module("MyApp")
    .factory('millsfactory', millsfactory);

millsfactory.$inject = ['$http'];


function millsfactory($http) {

    return {

        getNasa: function() {
            return $http.get("https://api.nasa.gov/planetary/apod?api_key=inFehaJWogK6MJMMdjpHf7GVLaXd9ZUUoASwbBBt");
        }


    }
}
