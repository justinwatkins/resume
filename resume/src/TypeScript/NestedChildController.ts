module com.justinwatkins {
    export class NestedChildController {
        static $inject: Array<String> = ['$rootScope'];
        constructor($rootScope: IRootStateService) {

        }
        public childName: String = "NestedChildController"
    }
}