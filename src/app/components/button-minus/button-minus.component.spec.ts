import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMinusComponent } from './button-minus.component';

describe('ButtonMinusComponent', () => {
  let component: ButtonMinusComponent;
  let fixture: ComponentFixture<ButtonMinusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMinusComponent]
    });
    fixture = TestBed.createComponent(ButtonMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
