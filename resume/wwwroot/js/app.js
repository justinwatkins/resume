'use strict'
angular.module('com.justin-watkins.home', ['ui.router'])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
        
    })
    .state('resume', {
        url: '/resume',
        templateUrl:'templates/resume.html'
    })
}])

