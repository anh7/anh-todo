import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutToolbarComponent } from './layout-toolbar.component';
import { LayoutMaterialModule } from '../layout-material.module';

describe('ToolbarComponent', () => {
  let component: LayoutToolbarComponent;
  let fixture: ComponentFixture<LayoutToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutToolbarComponent],
      imports: [LayoutMaterialModule],
    });
    fixture = TestBed.createComponent(LayoutToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
