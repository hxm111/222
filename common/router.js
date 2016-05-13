/**
 * Created by hxm on 16/5/12.
 */
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    var viewurl='';

    $urlRouterProvider.otherwise("/filter");

    $stateProvider
        .state('filter', {
            abstract: true,
            url: '/filter',
            controller:"filter.list",
            templateUrl: viewurl+"filter/filter.list.html"

        })
        .state('filter.list', {
            url: '',
            template:"",

        })
});