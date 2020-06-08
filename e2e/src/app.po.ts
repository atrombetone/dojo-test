import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitlePage() {
    return element(by.id('title-page')).getText() as Promise<string>;
  }

  getLinkHome() {
    return element(by.id('lnk-home')).getText() as Promise<string>;
  }

  getLinkProducts() {
    return element(by.id('lnk-products')).getText() as Promise<string>;
  }

  getLinkEmployees() {
    return element(by.id('lnk-employees')).getText() as Promise<string>;
  }

  getFooterContent() {
    return element(by.name('footer')).getText() as Promise<string>;
  }
}
