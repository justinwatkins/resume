module com.justinwatkins {
    export interface IRootStateService extends ng.IRootScopeService {
        $state: ng.ui.IStateService;
        $stateParams: ng.ui.IStateParamsService
    }
}