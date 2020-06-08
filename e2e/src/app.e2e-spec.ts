import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Suíte - AppComponent', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`Dado que tela inicial.
  Quando for carregada
  então o page title contido no header deve conter o texto "dojo".`, () => {
    page.navigateTo();
    expect(page.getTitlePage()).toEqual('dojo');
  });

  it(`Dado que tela inicial.
  Quando for carregada
  então o aside de navegação deve conter o link para acesso à página Home.`, () => {
    page.navigateTo();
    expect(page.getLinkHome()).toEqual('home Home');
  });

  it(`Dado que tela inicial.
  Quando for carregada
  então o aside de navegação deve conter o link para acesso à página Products.`, () => {
    page.navigateTo();
    expect(page.getLinkProducts()).toEqual('list Products');
  });

  it(`Dado que tela inicial.
  Quando for carregada
  então o aside de navegação deve conter o link para acesso à página de Employees.`, () => {
    page.navigateTo();
    expect(page.getLinkEmployees()).toEqual('accessibility_new Employees');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
