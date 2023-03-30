import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexComponent } from './index.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { MainComponent } from './components/main/main.component';
import { ModalComponent } from './components/modal/modal.component';
import { AboutmeModalComponent } from './components/modals/aboutme-modal/aboutme-modal.component';
import { ExperienceAddModalComponent } from './components/modals/experience-add-modal/experience-add-modal.component';
import { ExperienceModalComponent } from './components/modals/experience-modal/experience-modal.component';
import { EducationAddModalComponent } from './components/modals/education-add-modal/education-add-modal.component';
import { EducationModalComponent } from './components/modals/education-modal/education-modal.component';
import { SkillModalComponent } from './components/modals/skill-modal/skill-modal.component';
import { SkillAddModalComponent } from './components/modals/skill-add-modal/skill-add-modal.component';
import { SocialmediaModalComponent } from './components/modals/socialmedia-modal/socialmedia-modal.component';
import { SocialmediaAddModalComponent } from './components/modals/socialmedia-add-modal/socialmedia-add-modal.component';
import { MediaModalComponent } from './components/modals/media-modal/media-modal.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    BannerComponent,
    ProfileComponent,
    AboutmeComponent,
    MainComponent,
    ModalComponent,
    AboutmeModalComponent,
    ExperienceAddModalComponent,
    ExperienceModalComponent,
    EducationAddModalComponent,
    EducationModalComponent,
    SkillModalComponent,
    SkillAddModalComponent,
    SocialmediaModalComponent,
    SocialmediaAddModalComponent,
    MediaModalComponent,
    NavComponent,
    FooterComponent,
    SocialmediaComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
