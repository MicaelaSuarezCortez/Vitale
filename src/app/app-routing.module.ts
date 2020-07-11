import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PagenofoundComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRouting = RouterModule.forRoot(routes, { useHash:true});
