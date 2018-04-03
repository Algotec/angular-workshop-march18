import {TestBed, async, inject} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthService} from './userAuth/auth.service';
import {By} from '@angular/platform-browser';
import {RouterLinkStubDirective} from '../../testing/router-stubs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
  const authMock = {isLoggedIn: false};
  const title = `Pets 'R' us`;
  beforeEach(async(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RouterLinkStubDirective
      ],
      providers: [AuthService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA], // allows for shallow rendering
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(title);
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(title);
  }));
  it('toolbar button is labeled profile if logged in,profile if not', inject([AuthService], (authService: AuthService) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(getLoginButtonText(fixture)).toEqual('LOGIN');
    authService.isLoggedIn = true;
    fixture.detectChanges();
    expect(getLoginButtonText(fixture)).toEqual('PROFILE');
  }));

  it('checks login button takes us to login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const toolBar = compiled.query(By.css('mat-toolbar'));
    const login = toolBar.query(By.css('.loginLink'));
    // the following code steps out of the app.component boundries and actually test routerLink, here only for demo
    login.triggerEventHandler('click', null);
    fixture.detectChanges();
    const routerStub = login.injector.get(RouterLinkStubDirective);
    expect(routerStub.navigatedTo).toEqual(true);
  });
});

function getLoginButtonText(appComponentFixture) {
  const compiled = appComponentFixture.debugElement;
  const toolBar = compiled.query(By.css('mat-toolbar'));
  return toolBar.query(By.directive(RouterLinkStubDirective)).nativeElement.innerText;
};
