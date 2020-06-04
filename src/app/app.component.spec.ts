import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { Observable, from } from 'rxjs';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { filter, map } from 'rxjs/operators';


describe('AppComponent', () => {

  const matchObj = [ // initially all are false
    { matchStr: '(min-width: 1024px)', result: false },
    { matchStr: '(min-width: 1366px)', result: false },
    { matchStr: '(max-width: 1366px)', result: false }
  ];
  const fakeObserve = (s: string[]): Observable<BreakpointState> => from(matchObj).pipe(
      filter(match => match.matchStr === s[0]),
      map(match => <BreakpointState>{ matches: match.result, breakpoints: {} })
  );
  const bpSpy = jasmine.createSpyObj('BreakpointObserver', ['observe']);
  bpSpy.observe.and.callFake(fakeObserve);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [ 
        { provide: BreakpointObserver, useValue: bpSpy }
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'dojo'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('dojo');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to dojo!');
  // });
});
