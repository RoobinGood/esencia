'use strict';

define([
	'esencia/controller', 'views/categories/list'
], function(ParentController, View) {
	var Controller = {
		url: 'categories(/reset)',
		parentName: 'categories/layout',
		View: View,
		container: '#list'
	};

	return ParentController.extend(Controller);
});
