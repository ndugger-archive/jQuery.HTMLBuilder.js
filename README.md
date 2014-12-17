$.HTMLBuilder
=============
(Released under MIT License)

**Usage Example:**

	var myHTML = $.HTMLBuilder({
		tag: "section",
		children: [
			{
				tag: "h3",
				addClass: "title",
				text: "Lorem ipsum dolor sit amet...",
				on: {
					click: function() {
						alert("You clicked me!");
					}
				}
			},
			{
				tag: "select",
				attr: {
					id: "category"
				},
				children: [
					{
						tag: "option",
						text: "Categories",
						val: 0
					}
				]
			}
		]
	});
	
	$(body).append(myHTML);
	
You can give an element properties that match jQuery methods. The script looks for these, and calls them, accordingly (i.e. addClass, text, attr, html, etc)

**TODO:**
- ~~what if user passes invalid arg? string, etc~~ logs an error.
- ~~what if object does not have a tag property?~~ skips over it.
- ~~check for array vs object to pass into method~~ done.
- what if tag is invalid html? *should I bother?*
