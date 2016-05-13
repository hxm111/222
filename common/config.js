/**
 * Created by hxm on 16/5/12.
 */






var app = angular.module('app',['ui.router']);

app.controller('config', function ($scope,$rootScope) {

    //$scope.navs= [
    //      {
    //          name:'Filter',
    //          title:'Filter(过滤器)',
    //          url:'filter.list'
    //      }
    //];



    $scope.navs=CONFIG[BMURL].navs;
    $scope.name='angular 简单讲解';
    $rootScope.$state.go($scope.navs[0].url);
});

app.run(function($rootScope, $state, $stateParams){

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;


});


if(window.location.hostname=='localhost'){
    window.BMURL = 'http://test.aggior.com';
}else {
    window.BMURL = window.location.origin;
}

//配置文件
CONFIG={
    'http://test.aggior.com':{
        navs:[
            {
                name:'filter',
                title:'filter',
                url:'filter.list'

            }
        ]
    }
};
if(!CONFIG[BMURL]){
    CONFIG[BMURL]=CONFIG['http://test.aggior.com']
}





window.$IndexId=100;


