import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe(`Dado que a aplicação é inicializada.
  Quando renderizada a tela inicial`, () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`então é validado se o menu foi carregado.`, () => {
    page.navigateTo();
    expect(page.getApp()).toBeTruthy();
  });

  it(`então é validado a versão do atributo ng-version.`, () => {
    page.navigateTo();
    expect(page.getAppVersion()).toBeTruthy();
    page.getAppVersion().then(value => expect(value).toEqual('7.2.16'));
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
