import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponentPlus } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponentPlus;
  let fixture: ComponentFixture<ButtonComponentPlus>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponentPlus]
    });
    fixture = TestBed.createComponent(ButtonComponentPlus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
