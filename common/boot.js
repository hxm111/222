/**
 * Created by hxm on 16/5/12.
 */




var app = angular.module('app',['ui.router','ipCookie','chart.js','ui.bootstrap','ui.select']);

app.controller('config', function ($scope,$parse,$http,$rootScope) {
    $scope.navs=CONFIG[BMURL].navs;
    $scope.name=CONFIG[BMURL].name;

    $rootScope.$state.go($scope.navs[0].url);
});


