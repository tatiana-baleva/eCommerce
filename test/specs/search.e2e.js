"use strict";
const homePage = require('../pageobjects/home.page');
var assert = require('assert');

describe('User', () => {

    before(async () => {
        await browser.url('/');
    });

    it('should be able to see the title of the page', async () => {
        let expectedTitle = "World of La Mer | Skincare & Makeup | La Mer Official Site";
        let actualTitle = await browser.getTitle();

        //verify the title of the page
        assert.equal(actualTitle, expectedTitle, `[ERROR]: Actual title: ${actualTitle} 
        doesn't match with expected: ${expectedTitle}`);
    })

    it('should be able to see elements on the home page', async () => {
        await homePage.btnLogo.isDisplayed();
        await homePage.btnServices.isDisplayed();
        await homePage.btnBag.isDisplayed();
    })

    it('should be able to search for products', async () => {
        await homePage.btnSearch.click();
        await homePage.inputSearch.setValue("eye cream");

        //wait for results to be displayed
        await homePage.searchResultContainer.waitForDisplayed();

        //verify results match search request
        for (let i = 0; i < await homePage.txtOfDisplayingSearchResults.length; i++) {
            expect(await homePage.txtOfDisplayingSearchResults[i]).toHaveTextContaining('EYE');
        }
    });

    after(async () => {
        await browser.closeWindow();
    })
});