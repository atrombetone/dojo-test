import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getApp() {
    return element(by.css('app-root')).getText() as Promise<string>;
  }

  getAppVersion() {
    return element(by.css('app-root')).getAttribute('ng-version') as Promise<string>
  }
}
