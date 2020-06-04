import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  // injector = getTestBed();
  // httpMock = injector.get(HttpClient);
  // const service: ProductService = TestBed.get(ProductService);

  // afterEach(() => {
  //   httpMock.verify();
  // });

  it(`Dado que o serviço foi instanciado.`, () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  describe('Conjunto para Teste de Sucesso', () => {

    
    it(`Dado que a API de produtos está online.
        Quando é requisitado a listagem de produtos
        então uma lista contendo dois produtos é retornado`, () => {

          const products = [
            {
              "productType": "100",
              "productName": "Titulo de Capitalização"
            },
            {
              "productType": "102",
              "productName": "Previdência Privada"
            }
          ];

          // service.getProducts().subscribe(data => {
          //   expect(data.length).toBe(2);
          //   expect(data).toEqual(products);
          // });
      
          // const req = httpMock.expectOne(service.url);
          // expect(req.request.method).toBe("GET");
          // req.flush(products);
  
          // spyOn(HttpClient, 'get');
          // http = TestBed.get(HttpClient, 'get');
          // let response: any;
          // let errResponse: any;
          // const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
          // const data = 'Invalid request parameters';
          // apiService.get(somePath).subscribe(res => response = res, err => errResponse = err);
          // http.expectOne('url/being/monitored').flush(data, mockErrorResponse);
          // expect(errResponse).toBe(data);
  
    });
  });

});
