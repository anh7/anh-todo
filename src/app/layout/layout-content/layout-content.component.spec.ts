import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LayoutContentComponent } from './layout-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { trigger } from '@angular/animations';

describe('LayoutContentComponent', () => {
  let component: LayoutContentComponent;
  let fixture: ComponentFixture<LayoutContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutContentComponent],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      
    })
    .overrideComponent(LayoutContentComponent, {
      set: {
        animations: [trigger('routerTransition', [])]
      }
    })
    .compileComponents();
    fixture = TestBed.createComponent(LayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    });
  }));

  it('should have a getState method that returns the activatedRouteData state', () => {
    const mockActivatedRouteData = { state: 'mockState' };
    const mockOutlet = { activatedRouteData: mockActivatedRouteData };
    const state = component.getState(mockOutlet);
    expect(state).toEqual(mockActivatedRouteData.state);
  });
});
