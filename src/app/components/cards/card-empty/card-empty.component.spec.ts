import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmptyComponent } from './card-empty.component';

describe('CardEmptyComponent', () => {
  let component: CardEmptyComponent;
  let fixture: ComponentFixture<CardEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEmptyComponent]
    });
    fixture = TestBed.createComponent(CardEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
