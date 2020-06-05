import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { By } from '@angular/platform-browser';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Dado que um componente de loading.
      Quando instanciado 
      então sua variável deve ser diferente de null.`, () => {
    expect(component).toBeTruthy();
  });

  it(`Dado que o componente é instanciado.
      Quando a variável de Instância isVisible  é true
      então a imagem de Loading é mostrada.`, () => {
        const fixture = TestBed.createComponent(LoadingComponent);
        const component = fixture.debugElement.componentInstance;
        component.isVisible = true;
        fixture.detectChanges()
        const img = fixture.debugElement.query(By.css('#ui-loading-img'));
        expect(img).toBeTruthy();
        expect(img.attributes["src"]).toEqual("../../../assets/images/loading.gif");
   });

   it(`Dado que o componente é instanciado.
      Quando a variável de Instância isVisible é false
      então a imagem de Loading não deve ser mostrada.`, () => {
        const fixture = TestBed.createComponent(LoadingComponent);
        const component = fixture.debugElement.componentInstance;
        component.isVisible = false;
        fixture.detectChanges()
        const img = fixture.debugElement.query(By.css('#ui-loading-img'));
        expect(img).toEqual(null);
   });
});
