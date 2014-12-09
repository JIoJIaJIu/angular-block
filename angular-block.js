(function (undefined) {

angular.module.directive('block', ['$injector', '$templateCache', function ($injector, $templateCache) {
    return {
        restrict: 'A',
        priority: 10,
        replace: true,
        transclude: true,
        scope: {},

        template: function (element, attrs) {},

        compile: function () {
            var self = this;
            var directive;

            return {
                pre: function (scope, element, attrs, controller, transFn) {},

                post: function (scope, element, attrs, controller, transFn) {}
            }
        }
    }
}])

var angularModule = angular.module;
angular.module = function angularDecorator () {
    if (arguments.length === 1)
        return angularModule.apply(angular, arguments);

    var module = angularModule.apply(angular, arguments);

    module.block = function module_block(name, constructor, mods) {
    }

    return module;
}

})
