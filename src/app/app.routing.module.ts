import { NgModule }     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from "./not-found/not-found.component";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PrepComponent }   from './prep/prep.component';
import { BarcodeComponent }   from './barcode/barcode.component';
import { AppComponent } from "./app.component";



// import { CanDeactivateGuard }      from './can-deactivate-guard.service';
// import { AuthGuard }               from './auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
      },
    {
        path: 'home',
        component: HomeComponent,
      },
    {
    path: 'prep',
    component: PrepComponent,
  },
  {    path: 'barcode',
	   loadChildren: './barcode/barcode.module#BarcodeModule',},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule {}