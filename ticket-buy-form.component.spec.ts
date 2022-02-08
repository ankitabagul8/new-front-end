import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBuyFormComponent } from './ticket-buy-form.component';

describe('TicketBuyFormComponent', () => {
  let component: TicketBuyFormComponent;
  let fixture: ComponentFixture<TicketBuyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketBuyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBuyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
