"use strict";

App.controller('ShelterCtrl', 
  [
    "$scope",
    "$location",
    "ShelterFactory",

    function ($scope, $location, ShelterFactory) {
      $scope.shelterCollection = [];
      $scope.shelter = {
        zip: ""
      }

       
      
      $scope.searchShelters = function () {
        ShelterFactory.findShelters($scope.shelter.zip)
        .then(
          function () { 
            $location.path("/shelters")
          },
          function (err) {
            console.log(err);
          }
        );


      } // closing $scope.searchShelters function
    }
]);






      // ).then(
      //   function (shelter) {
      //     $scope.shelterCollection.push(shelter);
      //     return ShelterFactory();
      //   },
      //   function () {}
      // ).then(
      //   function (shelter) {
      //     $scope.shelterCollection.push(shelter);          
      //     return ShelterFactory();
      //   },
      //   function () {}
      // ).then(
      //   function (shelter) {
      //     $scope.shelterCollection.push(shelter);          
      //   },
      //   function () {}
      // );
//     }

// ]);
