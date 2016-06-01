'use strict';

define([
	'esencia/controller', 'views/layout'
], function(ParentController, View) {
	var Controller = {
		name: 'layout',
		View: View,
		container: '#app'
	};

	return ParentController.extend(Controller);
});
