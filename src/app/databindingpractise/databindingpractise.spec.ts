import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databindingpractise } from './databindingpractise';

describe('Databindingpractise', () => {
  let component: Databindingpractise;
  let fixture: ComponentFixture<Databindingpractise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Databindingpractise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Databindingpractise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
