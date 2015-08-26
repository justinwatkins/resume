module com.justinwatkins {
    export interface NestedScope extends ng.IScope {
        someData: string;
    }

    export class NestedController {
        static $inject: Array<String> = ['$rootScope', '$scope'];
        constructor($rootScope: IRootStateService, $scope: NestedScope) {
            $scope.someData = "this is a test";
        }
        public nestedName: String = "NestedController"
    }
}