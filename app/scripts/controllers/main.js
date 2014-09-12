'use strict';

/**
 * @name angularAppApp.controller:MainCtrl
 * @here we are handling all work related to Main Controller
 * @Author :Rituraj Ratan
 * # MainCtrl
 * Controller of the angularAppApp
 */
 angular.module('angularAppApp')
 .controller('MainCtrl', function ($scope,TOI,$sce){
 	$scope.start=0;
 	$scope.next=0;
 	$scope.pre=0;
 	$scope.current=0;
 	$scope.perPage=3;
 	$scope.total=0;
 	$scope.last=0;
 	$scope.paging=[];
 	$scope.filterNews=[];
 	$scope.newsStatus=0;


 	/** by this we get all the categories **/
 	$scope.category={};
 	TOI._getCategoryDetails().then(function(result){
 		$scope.category= result.data.Item;
 	});

 	$scope.setval='';
 	/** by this we get all the news related to categories **/
 	$scope.update=function(){
 		$scope.newsStatus=0;
 		var url=$('#cat_val').val();
 		$scope.news=[];
 		$scope.paging=[];
 		TOI._getNews(url).then(function(result){

 			angular.forEach(result.data.NewsItem, function(value) {
 				this.push({'title':value.HeadLine,'description': $sce.trustAsHtml(value.Story.substring(0,100)+'...<a href="#/news/'+url+'/'+value.NewsItemId+'" >see more</a>')});
 			}, $scope.news);
 			$scope.filterNews=$scope.news.slice(0,$scope.perPage);
 			$scope.total=Math.floor($scope.news.length/$scope.perPage);

 			for(var i=0;i<=$scope.total;i++)
 			{
 				$scope.paging.push(i);
 			}
 			$scope.newsStatus=1;
 			$scope.last=$scope.total;
 		});

 	};
 	/** it is use in to change page **/
 	$scope.changePage=function(page){
	 	$scope.current=page;
	 	$scope.next=page+1;
	 	$scope.pre=page;
	 	var pagecount=$scope.perPage*page;
	 	$scope.filterNews=$scope.news.slice(pagecount,$scope.perPage+pagecount);


 	};

 });
