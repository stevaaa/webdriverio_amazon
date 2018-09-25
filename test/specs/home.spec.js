var expect = require('chai').expect;
var Page = require('../pageobjects/page')
var HomePage = require('../pageobjects/home.page');

describe('Open Amazon shopping site and search for the product', function(){

		it('should open amazon india shopping site', function(){
				HomePage.open('/')
				expect(Page.title()).to.contain('Online Shopping site in India');
		});

});
