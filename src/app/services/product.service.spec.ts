import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { ProductModel } from '../models/product.model';

describe('ProductService', () => {

  const MockHttpValidReturn = [
    {
      "productType": "100",
      "productName": "Titulo de Capitalização"
    },
    {
      "productType": "102",
      "productName": "Previdência Privada"
    }
  ];

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [{ provide: HttpTestingController, useClass: MockHttpValidReturn }]
  }));

  it(`Dado que o serviço foi instanciado.`, () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it(`Dado que a API de produtos está online.
      Quando é requisitado a listagem de produtos
      então uma lista contendo dois produtos é retornado`, () => {
    
    const service: ProductService = TestBed.get(ProductService);

    service.getProducts().subscribe(dados => {
      expect(dados).toBeTruthy();
      expect(dados.length).toEqual(2);
      expect(dados).toEqual(MockHttpValidReturn);
    });
  });
});
