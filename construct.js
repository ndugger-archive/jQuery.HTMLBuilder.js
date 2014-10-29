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
			if ($.isArray(children)) {
				$.each(children, function() {
					var child = $("<" + (this.tag || "div") + ">");
					$.each(this, function(key, value) {
						if (child[key]) {
							child[key](value);
						};
					});
					parent.append(child);
					if (this.children) {
						$.construct(this, child);
					};
				});
			};
			return parent.children();
		} else {
			console.error(typeof children + ": " + children + " is an invalid argument.");
		};
	};
})(jQuery);
