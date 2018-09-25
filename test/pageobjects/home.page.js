var Page = require('./page')

var HomePage = Object.create(Page, {
		/**
		* define Elements
		*/
		searchForProduct: { get: function() { return browser.element('#twotabsearchtextbox'); } },
		searchButton: { get: function() { return browser.element('input[type=submit]'); } },
		searchNow: { value: function() { return browser.click('input', 'submit') } },
		//Overwrite page methods
		open: { value: function() { Page.open.call(this, '/'); } }


});

module.exports = HomePage;
