(function($) {
	$.construct = function(children, parent) {
		if ($.isPlainObject(children) || $.isArray(children)) {
			if ($.type(parent) === "undefined") {
				parent = $("<div>");
			} else {
				children = children.children
			};
			if ($.isPlainObject(children)) {
				children = [children]
			};
			$.each(children, function() {
				var child;
				if ($.type(this.tag) === "string") {
					child = $("<" + this.tag + ">");
					$.each(this, function(key, value) {
						if (child[key] && key !== "children") {
							child[key](value);
						};
					});
					parent.append(child);
				} else {
					child = parent;
				};
				if ($.type(this.children) !== "undefined") {
					$.construct(this, child);
				};
			});
			return parent.children();
		} else {
			console.error($.type(children) + ": " + children + " is an invalid argument.");
		};
	};
})(jQuery);
