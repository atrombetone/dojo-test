import { browser, by, element } from 'protractor';

export class NavbarElement {
    
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getMenuHome() {
    return element(by.id('lnk-home')).getText() as Promise<string>;
  }

  getMenuProducts() {
    return element(by.css('lnk-products')).getText() as Promise<string>;
  }

  
}
