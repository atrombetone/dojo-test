import { ProductPage } from './products.po';
import { browser, logging } from 'protractor';

describe('Suíte - Products', () => {
    let page: ProductPage;

    beforeEach(() => {
        page = new ProductPage();
    });

    it(`Dado que tela produtos é solicitada.
        Quando a tela for carregada
        então a tela deve conter um card com o título "Produtos".`, () => {
        page.navigateTo();
        expect(page.getTitleCard()).toEqual('Produtos');
    });

    it(`Dado que tela produtos é solicitada.
        Quando a tela for carregada
        então a tela deve conter um card onde serão listados dois produtos.`, () => {
        page.navigateTo();
                
        expect(page.getProduct100()).toEqual('100 - Titulo de Capitalização');
        expect(page.getProduct102()).toEqual('102 - Previdência Privada');
    });


    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});