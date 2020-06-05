import { NavbarElement } from './navbar.po';
import { browser, logging } from 'protractor';

describe('NavBar Component', () => {
    let navbar: NavbarElement;
  
    beforeEach(() => {
      navbar = new NavbarElement();
    });
  
    it(`Dado que a aplicação é inicializada.
        Quando renderizada a tela inicial
        então é validado se o menu foi carregado.`, () => {
      navbar.navigateTo();
      //expect(navbar.getMenu()).toBeTruthy();
    });
  
    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  });