import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'media/update/:id', component: IndexComponent},
  { path: 'socialmedia/add', component: IndexComponent},
  { path: 'socialmedia/update/:id', component: IndexComponent},
  { path: 'user/update/aboutme/:id', component: IndexComponent},
  { path: 'experience/add', component: IndexComponent},
  { path: 'experience/update/:id', component: IndexComponent},
  { path: 'education/add', component: IndexComponent},
  { path: 'education/update/:id', component: IndexComponent},
  { path: 'skill/add', component: IndexComponent},
  { path: 'skill/update/:id', component: IndexComponent},
  { path: '**', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
