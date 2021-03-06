﻿module com.justinwatkins {
    import ng=angular;
    class Main {
        constructor() {
            var module: ng.IModule = angular.module('com.justin-watkins.home', ['ui.router']);
            module.run(['$rootScope', '$state', '$stateParams', this.Run])
            module.config(['$stateProvider', '$urlRouterProvider', this.Config]);
        }
        Config($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state({
                    name: 'home',
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: <any>HomeController,
                    controllerAs: 'home'
                })
                .state({
                    name: 'resume',
                    url: '/resume',
                    templateUrl: 'templates/resume.html',
                    controller: <any>ResumeController,
                    controllerAs: 'resume'
                })
        }
        Run($rootScope: IRootStateService, $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    }
    var app = new Main();
}