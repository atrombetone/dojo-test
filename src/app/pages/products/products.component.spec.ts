import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material-module';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products.component';
import { LoadingComponent } from './../../components/loading/loading.component';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { Observable, of, throwError } from 'rxjs';

class ServiceMock {
  getProducts(): Observable<ProductModel[]> {
    return of([
      {
        "productType": "100",
        "productName": "Titulo de Capitalização"
      },
      {
        "productType": "102",
        "productName": "Previdência Privada"
      }
    ]);
  }
}


describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
      providers: [
        { provide: ProductService, useClass: ServiceMock}
      ],
      declarations: [ 
        ProductsComponent,
        LoadingComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => { 
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  
  it(`Dado que a API de Produtos está operante. 
    Quando o serviço de listagem de Produto é chamado,
    então o componente renderiza a listagem dos produtos obtidos.`, () => {
      expect(2).toBe(component.products.length);
  });
  
});
