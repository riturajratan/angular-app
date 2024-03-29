'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.service:TOI
 * @description make a service for local resonse of TImes OF India App
 * # TOI
 * service of the angularAppApp
 */
 angular.module('angularAppApp')
 .factory('TOI',function($http, $q){

 	/** by this get all category comes**/
 	var _getCategoryDetails=function(){

 		var deferred = $q.defer();
 		$http.get('/response.json').then(function(modal){

 			deferred.resolve(modal);
 		});

 		return deferred.promise;

 	};

 	/** by this get all related News**/

 	var _getNews=function(url){
 		var deferred = $q.defer();
 		$http.get('news/'+url+'.json').then(function(modal){
 			deferred.resolve(modal);
 		});

 		return deferred.promise;

 	};

 	return {

 		_getCategoryDetails:_getCategoryDetails,
 		_getNews:_getNews
 	};

 });

