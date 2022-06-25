import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedRecicpeComponent } from './featured-recicpe.component';

describe('FeaturedRecicpeComponent', () => {
  let component: FeaturedRecicpeComponent;
  let fixture: ComponentFixture<FeaturedRecicpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedRecicpeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedRecicpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
