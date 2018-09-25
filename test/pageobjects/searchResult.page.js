var Page = require('./page')

var SearchResultPage = Object.create(Page, {
	/**
	* define Elements
	*/
	numberOfProducts : { value: function() { return browser.elements('//*[@id="s-results-list-atf"]/li').value.length; } },

});

module.exports = SearchResultPage;
