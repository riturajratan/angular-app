'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
 angular.module('angularAppApp')
 .controller('MainCtrl', function ($scope,TOI,$sce){

 	$scope.category={};
 	TOI._getCategoryDetails().then(function(result){
 		$scope.category= result.data.Item;
 	});

 	$scope.setval='';
 	$scope.update=function(){
 		var url=$('#cat_val').val();
 		$scope.news=[];
 		TOI._getNews(url).then(function(result){
 			angular.forEach(result.data.NewsItem, function(value) {
 				this.push({'title':value.HeadLine,'description': $sce.trustAsHtml(value.Story)});
 			}, $scope.news);
 		});
 	};


 });
