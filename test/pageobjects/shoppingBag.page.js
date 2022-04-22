"use strict";
const Page = require('./page');

/**
 * subpage containing specific selectors and methods for a specific page
 */
class ShoppingBagPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shoppingBagHeader() {
        return browser.$('//h1[contains(text(), "Shopping Bag ")]');
    }

    get btnRemove() {
        return browser.$('//a[contains(text(), "Remove")]');
    }

    get btnGoShopping() {
        return browser.$('//a[contains(text(), "Go Shopping")]');
    }
}

module.exports = new ShoppingBagPage();