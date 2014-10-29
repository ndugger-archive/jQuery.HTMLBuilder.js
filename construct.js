(function($) {
	$.construct = function(children, parent) {
		if (typeof children === "object") {
			if (!parent) {
				parent = $("<div>");
			} else {
				children = children.children
			};
			if (!$.isArray(children)) {
				children = [children]
			};
			$.each(children, function() {
				var child;
				if (this.tag) {
					child = $("<" + (this.tag) + ">");
					$.each(this, function(key, value) {
						if (child[key] && key !== "children") {
							child[key](value);
						};
					});
					parent.append(child);
				} else {
					child = parent;
				};
				if (this.children) {
					$.construct(this, child);
				};
			});
			return parent.children();
		} else {
			console.error(typeof children + ": " + children + " is an invalid argument.");
		};
	};
})(jQuery);
