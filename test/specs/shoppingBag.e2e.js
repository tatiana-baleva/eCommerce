"use strict";
const homePage = require('../pageobjects/home.page');
const productPage = require('../pageobjects/product.page');
const shoppingBagPage = require('../pageobjects/shoppingBag.page');
var assert = require('assert');

describe('User', () => {

    before(async () => {
        await browser.url('/');
    });

    it('should be able to add products to bag', async () => {
        await homePage.btnLogo.click();
        await homePage.btnSearch.click();
        await homePage.inputSearch.setValue("eye cream");

        //wait for results to be displayed
        await homePage.searchResultContainer.waitForDisplayed();

        //click on first displayed result
        await homePage.listOfDisplayingSearchResults[0].click();

        //wait for product page to be loaded
        await productPage.productName.waitForDisplayed();

        //add item to the bag
        await productPage.btnAddToBag.scrollIntoView();
        await productPage.btnAddToBag.click();

        //wait for product to be added to the bag
        await productPage.addedToBag.waitForDisplayed();

        //check if item was added to the bag
        expect(await productPage.addedToBag).toBeDisplayed();
    });

    it('should be able to remove products from bag', async () => {
        await homePage.btnBag.click();
        await shoppingBagPage.shoppingBagHeader.waitForDisplayed();

        //remove item from the bag
        await shoppingBagPage.btnRemove.click();
        await shoppingBagPage.btnGoShopping.waitForDisplayed();

        //save number of items into a variable
        let headerText = await shoppingBagPage.shoppingBagHeader.getText();
        let actualQty = headerText.substring(14, 15);

        //verify if item was removed from the bag
        let expectedQty = 0;
        assert.equal(actualQty, expectedQty, `[ERROR]: Actual quantity - ${actualQty} 
        doesn't match with expected - ${expectedQty}`);
    })

    after(async () => {
        await browser.closeWindow();
    })
});


