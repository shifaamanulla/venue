import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllComponent } from './admin-view-all.component';

describe('AdminViewAllComponent', () => {
  let component: AdminViewAllComponent;
  let fixture: ComponentFixture<AdminViewAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewAllComponent]
    });
    fixture = TestBed.createComponent(AdminViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
