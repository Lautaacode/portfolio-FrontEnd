import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddModalComponent } from './experience-add-modal.component';

describe('ExperienceAddModalComponent', () => {
  let component: ExperienceAddModalComponent;
  let fixture: ComponentFixture<ExperienceAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAddModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
