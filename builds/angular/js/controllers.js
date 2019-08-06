var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController',
    function MyController($scope, $http) {
        $http.get('js/data.json').then(function (response) {
            $scope.artists = response.data;
            $scope.artistOrder = 'name';
    });
});

myControllers.controller('DetailsController',
    function MyController($scope, $http, $routeParams) {
        $http.get('js/data.json').then(function (response) {
            $scope.artists = response.data;
            $scope.whichItem = $routeParams.artistId;
            if ($routeParams.artistId > 0) {
                $scope.previousItem = Number($routeParams.artistId) - 1;
            } else {
                $scope.previousItem = $scope.artists.length - 1;
            }

            if ($routeParams.artistId < $scope.artists.length - 1) {
                $scope.nextItem = Number($routeParams.artistId) + 1;
            } else {
                $scope.nextItem = 0;
            }
    });
});