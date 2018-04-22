import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaRegistrationComponent } from './tea-registration.component';

describe('TeaRegistrationComponent', () => {
  let component: TeaRegistrationComponent;
  let fixture: ComponentFixture<TeaRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
