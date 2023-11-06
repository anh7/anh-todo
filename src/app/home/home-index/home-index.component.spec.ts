import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndexComponent } from './home-index.component';

describe('HomeIndexComponent', () => {
  let component: HomeIndexComponent;
  let fixture: ComponentFixture<HomeIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIndexComponent]
    });
    fixture = TestBed.createComponent(HomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'anh-todo'`, () => {
    expect(component.title).toEqual('anh-todo');
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('anh-todo app is running!');
  });
});
