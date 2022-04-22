"use strict";
const Page = require('./page');

/**
 * subpage containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productName() {
        return browser.$('//h1[contains(@class, "product-full__name")]');
    }

    get btnAddToBag() {
        return browser.$('(//a[contains(text(), "Add to Bag")])[2]');
    }

    get addedToBag() {
        return browser.$('//h3[contains(@class, "cart")]/span[contains(text(), "Added")]');
    }
}

module.exports = new ProductPage();