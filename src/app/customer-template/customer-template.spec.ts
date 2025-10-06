import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTemplate } from './customer-template';

describe('CustomerTemplate', () => {
  let component: CustomerTemplate;
  let fixture: ComponentFixture<CustomerTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
