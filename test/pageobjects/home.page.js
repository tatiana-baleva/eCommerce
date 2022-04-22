"use strict";
const Page = require('./page');

/**
 * subpage containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogo() {
        return browser.$('//a[contains(@title, "la Mer")]');
    }

    get btnServices() {
        return browser.$('//div[contains(@class, "utilities-item")]/a');
    }

    get btnBag() {
        return browser.$('//span[contains(text(), "BAG")]');
    }

    get btnSearch() {
        return browser.$('(//span[contains(text(), "SEARCH")])[1]');
    }

    get inputSearch() {
        return browser.$('//input[@id="search"]');
    }

    get searchResultContainer() {
        return browser.$('//ul[contains(@class, "product-results")]');
    }

    get listOfDisplayingSearchResults() {
        return browser.$$('//ul[contains(@class, "product-results")]/div');
    }

    get txtOfDisplayingSearchResults() {
        return browser.$$('//ul[contains(@class, "product-results")]/div/div/div/following-sibling::div/div/div[@class="product-name"]');
    }
}

module.exports = new HomePage();
