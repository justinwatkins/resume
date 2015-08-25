/// <reference path="Types/angularjs/angular.d.ts" />
/// <reference path="Types/angularjs/angular-resource.d.ts" />
/// <reference path="../../wwwroot/lib/angular-ui-router/api/angular-ui-router.d.ts" />


    interface IRootStateService extends ng.IRootScopeService {
        $state: ng.ui.IStateService;
        $stateParams: ng.ui.IStateParamsService
    }

    class Application {
        constructor() {
            var module: ng.IModule = angular.module('com.justin-watkins.home', ['ui.router']);
            module.run(this.Run);
            module.config(this.Config);
        }
        Config($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
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
        }
        Run($rootScope: IRootStateService, $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
    }

    class ResumeController {
        constructor($rootScope: IRootStateService) {
            this.name = $rootScope.$state.current.name;
        }
        name: String;
        doClick() {
            alert(this.name);
        }
    }
    var app = new Application();

    
