import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThroughtComponent } from './delete-throught.component';

describe('DeleteThroughtComponent', () => {
  let component: DeleteThroughtComponent;
  let fixture: ComponentFixture<DeleteThroughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteThroughtComponent]
    });
    fixture = TestBed.createComponent(DeleteThroughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
