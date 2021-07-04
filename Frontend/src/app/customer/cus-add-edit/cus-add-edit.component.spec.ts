import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAddEditComponent } from './cus-add-edit.component';

describe('CusAddEditComponent', () => {
  let component: CusAddEditComponent;
  let fixture: ComponentFixture<CusAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
