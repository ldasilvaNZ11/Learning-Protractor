
browser.ignoreSynchronization = true;
describe('TM front-page tests', function() {
	it('TM front-page should have a logo', function () {
//arrange

		browser.get('http://www.trademe.co.nz/');
	
//act
//var tmLogo = element(by.id('SiteHeader_SiteTabs_kevin'));
var tmLogo = $ ('#SiteHeader_SiteTabs_kevin');

//verify
expect(tmLogo.isDisplayed()).toBeTruthy();

    });

});

