(function(){
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieDetails", {
        templateUrl: "/ps-movies/movie-details-component.html",
        // $canActivate: function($timeout){
        //     return $timeout(function(){
        //         return true;
        //     }, 2000);
        // },
        $routeConfig: [
            // Paths define here a relative to where we are
            { path: "/overview", component:"movieOverview", name: "Overview"},
            { path: "/cast", component:"movieCast", name: "Cast"},
            { path: "/director", component:"movieDirector", name: "Director"}
        ],
        controllerAs: "model",
        controller: function(){
            var model = this;

            model.$routerOnActivate = function(next){
                model.id = next.params.id;
            };
        }
    });

    module.component("movieOverview", {
       template: "This is the overview"
    });

    module.component("movieCast", {
       template: "This is the cast"
    });

    module.component("movieDirector", {
       template: "This is the director"
    });
}());