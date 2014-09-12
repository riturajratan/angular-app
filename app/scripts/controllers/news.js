'use strict';

/**
 * @name angularAppApp.controller:NewsCtrl
 * @here we are handling all work related to News Controller
 * @Author :Rituraj Ratan
 * # NewsCtrl
 * Controller of the angularAppApp
 */
 angular.module('angularAppApp')
 .controller('NewsCtrl', function ($scope,TOI,$sce,$routeParams){
     $scope.title='';
     $scope.description='';

     TOI._getNews($routeParams.cat).then(function(result){
		var temp=result.data.NewsItem.filter(function(e1) {
                       return e1.NewsItemId === $routeParams.newsid;
           });

 			angular.forEach(temp, function(value) {
 				$scope.title=value.HeadLine;
 				$scope.description= $sce.trustAsHtml(value.Story);
 			});


    });
     /**
      * [gohome it goes to main page]
      * @return {[assign method]} [assign window location]
      */
     $scope.gohome=function(){
     	window.location.assign('#/');

     };

 });
