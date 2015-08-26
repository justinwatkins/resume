var com;
(function (com) {
    var justinwatkins;
    (function (justinwatkins) {
        var NestedChildController = (function () {
            function NestedChildController($rootScope) {
                this.childName = "NestedChildController";
            }
            NestedChildController.$inject = ['$rootScope'];
            return NestedChildController;
        })();
        justinwatkins.NestedChildController = NestedChildController;
    })(justinwatkins = com.justinwatkins || (com.justinwatkins = {}));
})(com || (com = {}));
