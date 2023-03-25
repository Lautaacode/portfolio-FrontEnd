import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './shared/index/index.component';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./shared/index/index.module').then(m => m.IndexModule) },
  { path: 'login', loadChildren: () => import('./shared/login/login.module').then(m => m.LoginModule) },
  { path: 'experience/add', component: IndexComponent},
  { path: 'experience/update/:id', component: IndexComponent},
  { path: '**', redirectTo: 'index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
