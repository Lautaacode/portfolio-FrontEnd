import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaAddModalComponent } from './socialmedia-add-modal.component';

describe('SocialmediaAddModalComponent', () => {
  let component: SocialmediaAddModalComponent;
  let fixture: ComponentFixture<SocialmediaAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaAddModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
