import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThroughtComponent } from './edit-throught.component';

describe('EditThroughtComponent', () => {
  let component: EditThroughtComponent;
  let fixture: ComponentFixture<EditThroughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditThroughtComponent]
    });
    fixture = TestBed.createComponent(EditThroughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
