
    var app = angular.module('myApp', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
    });

    app.controller('CountryStateCityCtnl', function($scope){
        $scope.countries = {
            'India': {
                'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
                'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur'],
                'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur']
            },
            'USA': {
                'Alabama': ['Montgomery', 'Birmingham'],
                'California': ['Sacramento', 'Fremont'],
                'Illinois': ['Springfield', 'Chicago']
            },
            'Australia': {
                'New South Wales': ['Sydney'],
                'Victoria': ['Melbourne']
            }
        };
        $scope.GetSelectedCountry = function () {
            $scope.strCountry = document.getElementById("country").value;
        };
        $scope.GetSelectedState = function () {
            $scope.strState = document.getElementById("state").value;
        };
    });
