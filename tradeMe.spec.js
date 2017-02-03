"use strict";

const EC = protractor.ExpectedConditions;

describe("Trade me front-page tests", () => {
	beforeEach(() => {
		// ARRANGE
		browser.get("");
	});

	it("should show logo",  () => {
		const tradeMeLogo = element(by.css("#SiteHeader_SiteTabs_kevin"));

		//ASSERT
		expect(tradeMeLogo.isDisplayed()).toBeTruthy();
    });

	it ("should show the searched word in the result when searching for a keyword", () => {
		const searchBox = element(by.id("searchString"));
	    const searchResult = element(by.css("h1.inline-block"));
		const expectedUrl = "http://www.trademe.co.nz/Browse/SearchResults.aspx?searchString=nike&type=Search&searchType=all&user_region=100&user_district=0&generalSearch_keypresses=4&generalSearch_suggested=0&generalSearch_suggestedCategory="

		// ACT
	    searchBox.sendKeys("nike");
	    searchBox.sendKeys(protractor.Key.ENTER);
		browser.wait(EC.visibilityOf(searchResult), 10000);

		// ASSERT
	    expect(searchResult.getText()).toContain("Search results for 'nike'");
	    expect(browser.getCurrentUrl()).toBe(expectedUrl);
	});
});
