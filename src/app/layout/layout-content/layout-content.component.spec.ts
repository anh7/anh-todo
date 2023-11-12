import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutContentComponent } from './layout-content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LayoutContentComponent', () => {
  let component: LayoutContentComponent;
  let fixture: ComponentFixture<LayoutContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutContentComponent],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      
    });
    fixture = TestBed.createComponent(LayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
