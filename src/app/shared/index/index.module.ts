import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { LoginModule } from '../login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudyComponent } from './components/study/study.component';
import { SkillComponent } from './components/skill/skill.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MainComponent } from './components/main/main.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileModalComponent } from './components/modals/profile-modal/profile-modal.component';
import { BannerModalComponent } from './components/modals/banner-modal/banner-modal.component';
import { AboutmeModalComponent } from './components/modals/aboutme-modal/aboutme-modal.component';
import { ExperienceAddModalComponent } from './components/modals/experience-add-modal/experience-add-modal.component';
import { ExperienceModalComponent } from './components/modals/experience-modal/experience-modal.component';
import { EducationAddModalComponent } from './components/modals/education-add-modal/education-add-modal.component';
import { EducationModalComponent } from './components/modals/education-modal/education-modal.component';
import { SkillModalComponent } from './components/modals/skill-modal/skill-modal.component';
import { SkillAddModalComponent } from './components/modals/skill-add-modal/skill-add-modal.component';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    ProjectsComponent,
    ExperienceComponent,
    StudyComponent,
    SkillComponent,
    BannerComponent,
    ProfileComponent,
    AboutmeComponent,
    MainComponent,
    ModalComponent,
    ProfileModalComponent,
    BannerModalComponent,
    AboutmeModalComponent,
    ExperienceAddModalComponent,
    ExperienceModalComponent,
    EducationAddModalComponent,
    EducationModalComponent,
    SkillModalComponent,
    SkillAddModalComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
