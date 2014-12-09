(function (undefined) {

var angularModule = angular.module;

angular.module = function angularDecorator () {

if (arguments.length === 1)
    return angularModule.apply(angular, arguments);

var module = angularModule.apply(angular, arguments);

return module;
})
