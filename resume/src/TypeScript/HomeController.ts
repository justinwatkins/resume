module com.justinwatkins {

    export class HomeController {
        static $inject: Array<String> = ['$rootScope'];
        constructor($rootScope: IRootStateService) {

        }
        projects: Array<string>;
    }
}