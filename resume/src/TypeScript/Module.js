/// <reference path="Types/angularjs/angular.d.ts" />
/// <reference path="Types/angularjs/angular-resource.d.ts" />
/// <reference path="../../wwwroot/lib/angular-ui-router/api/angular-ui-router.d.ts" />
var Application = (function () {
    function Application() {
        var module = angular.module('com.justin-watkins.home', ['ui.router']);
        module.run(this.Run);
        module.config(this.Config);
    }
    Application.prototype.Config = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state({
            name: 'home',
            url: '/',
            templateUrl: 'templates/home.html',
        })
            .state({
            name: 'resume',
            url: '/resume',
            templateUrl: 'templates/resume.html',
            controller: ResumeController,
            controllerAs: 'resume'
        });
    };
    Application.prototype.Run = function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    };
    return Application;
})();
var ResumeController = (function () {
    function ResumeController($rootScope) {
        this.name = $rootScope.$state.current.name;
    }
    ResumeController.prototype.doClick = function () {
        alert(this.name);
    };
    return ResumeController;
})();
var app = new Application();
