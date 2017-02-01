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

it ("Performing a keyword search", function() {
    browser.get('http://www.trademe.co.nz/');

    var searchBox = element(by.id('searchString'));
    var searchResult = element(by.css('inline-block'));

    searchBox.sendKeys('nike');
    searchBox.sendKeys(protractor.Key.ENTER)

    //expect(searchResult.getText()).toContain('Search results for \'nike\'');
    expect(browser.getCurrentUrl()).toBe('http://www.trademe.co.nz/Browse/SearchResults.aspx?searchString=nike&type=Search&searchType=all&user_region=100&user_district=0&generalSearch_keypresses=4&generalSearch_suggested=0&generalSearch_suggestedCategory=');
    
});




});

