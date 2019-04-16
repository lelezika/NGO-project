import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagememtComponent } from './user-managememt.component';

describe('UserManagememtComponent', () => {
  let component: UserManagememtComponent;
  let fixture: ComponentFixture<UserManagememtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagememtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagememtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
