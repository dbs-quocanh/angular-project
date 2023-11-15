import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSmComponent } from './dialog-sm.component';

describe('DialogSmComponent', () => {
  let component: DialogSmComponent;
  let fixture: ComponentFixture<DialogSmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSmComponent]
    });
    fixture = TestBed.createComponent(DialogSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
