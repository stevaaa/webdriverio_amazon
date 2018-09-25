var expect = require('chai').expect;

var Page = require('../pageobjects/page');
var HomePage = require('../pageobjects/home.page');
var SearchResultPage = require('../pageobjects/searchResult.page');

describe('Search for products and find product specific informations', function(){

	// Hook before running any test below
	before(function(){
		HomePage.open();
		HomePage.searchForProduct.setValue('Sandisk 32GB');
		HomePage.searchNow();
	});

	it('should search for given product', function() {
			expect(Page.title()).to.contain('Sandisk 32GB');
	});

	it('should display 20 products on the search result page', function() {
			expect(SearchResultPage.numberOfProducts()).to.equal(20);
	});

	it('should search sponsoredProduct name and price', function(){
		var sponsoredElement = '//*[@id="result_0"]/div/div/div/div[2]/div[2]/div[1]/a/h2'
		if(browser.isExisting(sponsoredElement)){
				var sponsoredProductPriceTag = browser.getText('//*[@id="result_0"]/div/div/div/div[2]/div[3]/div[1]/div[1]/a/span[2]')
				// expect(Page.title()).to.contain('Sandisk 32GB');
		}
		else {
			this.skip();
		}
	});

	it('should extract the details like name, price, saving of the 1st not sponsored product listed', function(){
		var productName = browser.getText('//*[@id="result_1"]/div/div[2]/div/div[2]/div[1]/div[1]/a/h2')
		var priceTag = browser.getText('//*[@id="result_1"]/div/div[2]/div/div[2]/div[2]/div[1]/div[1]/a/span[2]')
		var priceSavings = browser.getText('//*[@id="result_1"]/div/div[2]/div/div[2]/div[2]/div[1]/div[2]/span[2]')
		// console.log(productName, priceTag, priceSavings);

		expect(priceTag).to.match(/^  [0-9]*$/);
	});

});
