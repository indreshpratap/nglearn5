import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrRegistrationComponent } from './usr-registration.component';

describe('UsrRegistrationComponent', () => {
  let component: UsrRegistrationComponent;
  let fixture: ComponentFixture<UsrRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
