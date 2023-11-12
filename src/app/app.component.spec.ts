import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { LayoutContentComponent } from './layout/layout-content/layout-content.component';
import { trigger } from '@angular/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async() => await TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule
    ],
    declarations: [AppComponent]
  })
  .overrideComponent(LayoutContentComponent, {
    set: {
      animations: [trigger('routerTransition', [])]
    }
  })
  .compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
