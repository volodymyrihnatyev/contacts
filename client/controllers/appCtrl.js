   var app = angular.module('App',[]);
   app.controller('appCtrl',function($scope , $http){

var refresh = function (){
       $http.get('/contactlist')
      .success(function (resp ) {
       $scope.contacts = resp;
       console.log(resp);
      });
      $scope.contact={};
  };
  refresh();
      $scope.addContact = function (){
      	console.log($scope.contact);
      	$http.post('/contactlist', $scope.contact).success(function (resp ) {
       console.log(resp);
      });
      	refresh();
      };
      $scope.remove = function (id){
      	console.log(id);
      	$http.delete('/contactlist/' + id).success(function (resp ) {
      	refresh();
   });
      };
      $scope.edit = function (id){
      	$http.get('/contactlist/' + id).success(function (resp ) {
      	$scope.contact = resp;
   });
      	  };
      $scope.update = function (){
      	console.log($scope.contact._id);
      	$http.put('/contactlist/' + $scope.contact._id , $scope.contact).success(function (resp ) {
      	refresh();
   });
   };
         $scope.clear = function (){
              $scope.contact={};
   };
});

