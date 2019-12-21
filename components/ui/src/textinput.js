(function($) {    

    $.anwidget("an.TextInput", {
        options: {
			'visible': true,
			'disabled': false,
			'text': "",
			'position': 'absolute',
			'font-size':'23px'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "font-size"],
		_attrs: ["id", "disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "textinput" + _widgetID++ });
		},
		getCreateString: function() {
			return "<input type='text'>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		}
    });   
})(jQuery);