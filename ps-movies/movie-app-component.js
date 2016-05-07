(function(){
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieApp", {
        templateUrl: "/ps-movies/movie-app-component.html",
        $routeConfig: [
            { path: "/list", component:"movieList", name: "List"},
            { path: "/about", component:"appAbout", name: "About"},
            // The ... at the end of the path here tells angular that this is a non terminal route
            //  that is that the item at the location will provide further routes deeper into the path
            { path: "/details/:id/...", component:"movieDetails", name: "Details"},
            { path: "/**", redirectTo:["List"]}
        ]
    });
}());