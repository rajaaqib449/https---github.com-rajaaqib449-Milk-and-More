import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshMilkComponent } from './fresh-milk.component';

describe('FreshMilkComponent', () => {
  let component: FreshMilkComponent;
  let fixture: ComponentFixture<FreshMilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshMilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshMilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
