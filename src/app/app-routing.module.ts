import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceModalComponent } from './shared/index/components/modals/experience-modal/experience-modal.component';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./shared/index/index.module').then(m => m.IndexModule) },
  { path: 'login', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
