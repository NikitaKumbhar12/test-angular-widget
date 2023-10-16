import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWebComponentComponent } from './my-web-component.component';

describe('MyWebComponentComponent', () => {
  let component: MyWebComponentComponent;
  let fixture: ComponentFixture<MyWebComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWebComponentComponent]
    });
    fixture = TestBed.createComponent(MyWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
