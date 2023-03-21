import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddModalComponent } from './skill-add-modal.component';

describe('SkillAddModalComponent', () => {
  let component: SkillAddModalComponent;
  let fixture: ComponentFixture<SkillAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAddModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
