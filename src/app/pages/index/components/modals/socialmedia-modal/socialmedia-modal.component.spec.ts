import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaModalComponent } from './socialmedia-modal.component';

describe('SocialmediaModalComponent', () => {
  let component: SocialmediaModalComponent;
  let fixture: ComponentFixture<SocialmediaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
