import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUnavailbleComponent } from './server-unavailble.component';

describe('ServerUnavailbleComponent', () => {
  let component: ServerUnavailbleComponent;
  let fixture: ComponentFixture<ServerUnavailbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerUnavailbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerUnavailbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
