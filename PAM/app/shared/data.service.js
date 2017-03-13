(function () {

    angular.module('dataService')
        .factory('dataService', dataService);
    
    dataService.$inject=['$http'];
    
    function dataService($http){
        var API_URL = "https://jsonplaceholder.typicode.com/";
        var service={
            get:get
        };
        return service;

        function get(endPoint, config){
            var config = config || {};
            //var dataId = data?'/'+data.id:'';
            return $http.get(API_URL + endPoint ,config);
        }
    }

})();