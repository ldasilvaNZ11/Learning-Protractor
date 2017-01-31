//tm-spec.js

//the command below allows protractor to test non-AngularJS webpages
browser.ignoreSynchronization = true;

describe('TM front-page tests', function() {
	it('TM front-page should have a logo', function () {

//ARRANGE

		browser.get('http://www.trademe.co.nz/');
	
//ACT

//var tmLogo = element(by.id('SiteHeader_SiteTabs_kevin'));
var tmLogo = $('#SiteHeader_SiteTabs_kevin');

//ASSERT
expect(tmLogo.isDisplayed()).toBeTruthy();

    });

});

