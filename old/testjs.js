var Button1 = (function(module) {

	module.Die = function(resultObject) {
		resultObject.prepend("You are dead");
		};

	return module;
}(Button1 || {}));