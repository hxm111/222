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
            templateUrl: viewurl+"filter/filter.list.html"
        })
});