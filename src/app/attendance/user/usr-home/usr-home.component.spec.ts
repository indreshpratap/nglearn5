import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrHomeComponent } from './usr-home.component';

describe('UsrHomeComponent', () => {
  let component: UsrHomeComponent;
  let fixture: ComponentFixture<UsrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
