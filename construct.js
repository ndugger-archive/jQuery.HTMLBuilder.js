(function($) {
	$.construct = function(children, parent) {
		if (!parent) {
			parent = $("<div>");
		} else {
			children = children.children
		};
		if (children) {
			$.each(children, function() {
				var child = $("<" + this.tag + ">");
				$.each(this, function(key, value) {
					if (child[key]) {
						child[key](value);
					};
				});
				parent.append(child);
				$.construct(this, child);
			});
		};
		return parent.children();
	}
})(jQuery);
