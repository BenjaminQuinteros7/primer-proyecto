import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndumentariaComponent } from './card-indumentaria.component';

describe('CardIndumentariaComponent', () => {
  let component: CardIndumentariaComponent;
  let fixture: ComponentFixture<CardIndumentariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIndumentariaComponent]
    });
    fixture = TestBed.createComponent(CardIndumentariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
