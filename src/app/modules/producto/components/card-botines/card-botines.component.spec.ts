import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBotinesComponent } from './card-botines.component';

describe('CardBotinesComponent', () => {
  let component: CardBotinesComponent;
  let fixture: ComponentFixture<CardBotinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBotinesComponent]
    });
    fixture = TestBed.createComponent(CardBotinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
