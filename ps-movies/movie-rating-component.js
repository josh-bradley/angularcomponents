(function(){
    "use strict";

    var buildRating = function(value, max){
        var entries = [];
        for(var i = 0; i < max; i++){
            var temp = i < value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(temp);
        }

        return entries;
    };

    var controller = function(){
        var model = this;
        
        model.$onInit = function(){
            model.entries = buildRating(model.value, model.max);
        };

        model.$onChanges = function(){
            model.entries = buildRating(model.value, model.max);
        };
    };

    var module = angular.module("psMovies");

    module.component("movieRating", {
        controllerAs:"model",
        templateUrl: "/ps-movies/movie-rating-component.html",
        controller: controller,
        bindings:{
            value: "<",
            max: "<", 
            setRating: "&"
        }
    });
}());