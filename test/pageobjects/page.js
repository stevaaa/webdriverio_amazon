"use strict"

class Page {

	open (path) { browser.url(path); }
	title() { return browser.getTitle(); }

}

module.exports = new Page();
