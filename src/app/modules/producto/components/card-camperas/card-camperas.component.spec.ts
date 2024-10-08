import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCamperasComponent } from './card-camperas.component';

describe('CardCamperasComponent', () => {
  let component: CardCamperasComponent;
  let fixture: ComponentFixture<CardCamperasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCamperasComponent]
    });
    fixture = TestBed.createComponent(CardCamperasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
