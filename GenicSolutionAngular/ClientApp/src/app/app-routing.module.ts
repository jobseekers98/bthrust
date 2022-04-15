import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'auth/users', loadChildren: () => import('./userprofile/userprofile.module').then(m => m.UserProfileModule) },
  { path: '', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
