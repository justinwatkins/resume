var com;
(function (com) {
    var justinwatkins;
    (function (justinwatkins) {
        var NestedController = (function () {
            function NestedController($rootScope, $scope) {
                this.nestedName = "NestedController";
                $scope.someData = "this is a test";
            }
            NestedController.$inject = ['$rootScope', '$scope'];
            return NestedController;
        })();
        justinwatkins.NestedController = NestedController;
    })(justinwatkins = com.justinwatkins || (com.justinwatkins = {}));
})(com || (com = {}));
