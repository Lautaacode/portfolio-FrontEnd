import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAddModalComponent } from './education-add-modal.component';

describe('EducationAddModalComponent', () => {
  let component: EducationAddModalComponent;
  let fixture: ComponentFixture<EducationAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAddModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
