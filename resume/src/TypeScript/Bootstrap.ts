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
                controller: HomeController,
                controllerAs: 'home'
            })
            .state({
                name: 'resume',
                url: '/resume',
                templateUrl: 'templates/resume.html',
                controller: ResumeController,
                controllerAs: 'resume'
            })
            .state({
                name: 'nested',
                url: '/nested',
                templateUrl: 'templates/nested.html',
                controller: NestedController,
                controllerAs: 'nested'
            })
            .state({
                name: 'nested.child',
                url: '/child',
                templateUrl: 'templates/nestedChild.html',
                controller: NestedChildController,
                controllerAs: 'child'
            });
    }
    Run($rootScope: IRootStateService, $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
}
var app = new Main();