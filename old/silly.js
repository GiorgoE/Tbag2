var BUTTON1 = (function(module) {

	module.DoIt = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
		};

	return module;
}(BUTTON1 || {}));