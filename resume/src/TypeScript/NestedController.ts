class NestedController {
    static $inject: Array<String> = ['$rootScope'];
    constructor($rootScope: IRootStateService) {

    }
    public nestedName: String = "NestedController"
}