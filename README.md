HTML-Constructor - jQuery-Version
=================================

Usage Example:

	var myHTML = [
		{
			tag:  "section",
			text: "Parent Container",
			addClass: "parent-container",
			children: [
				{
					tag: "input",
					attr: {
						type: "number",
						placeholder: "Phone 1"
					}
				}
			]
		}
	]
	
	var constructedHTML = $.construct(myHTML);
	
You can then append `constructedHTML` to your document. You can give an element properties that match jQuery methods. The script looks for these, and calls them, accordingly (i.e. addClass, text, attr, html, etc)
