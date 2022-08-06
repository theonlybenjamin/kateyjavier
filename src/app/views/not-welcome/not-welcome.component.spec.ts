import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotWelcomeComponent } from './not-welcome.component';

describe('NotWelcomeComponent', () => {
  let component: NotWelcomeComponent;
  let fixture: ComponentFixture<NotWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
