import { browser, by, element } from 'protractor';

export class ProductPage {
    navigateTo() {
      return browser.get(browser.baseUrl + '/products') as Promise<any>;
    }

    getTitleCard() {
        return element(by.tagName('h3')).getText() as Promise<string>;
    }

    getProduct100() {
        return element(by.id('item-100')).getText() as Promise<string>;
    }

    getProduct102() {
        return element(by.id('item-102')).getText() as Promise<string>;
    }
}