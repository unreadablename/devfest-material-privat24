(function(){
	'use strict';

	angular.module("phoenixApp").factory("api", function() {
		var api = {};

		api.getPosts = function(){
			return [
				{
					id: 1,
					title: '123',
					body: 'body'
				},
				{
					id: 2,
					title: 'post2',
					body: 'body'
				},
				{
					id: 3,
					title: 'post3',
					body: 'body3'
				}
			];
		};

		return api;
	});

})();
