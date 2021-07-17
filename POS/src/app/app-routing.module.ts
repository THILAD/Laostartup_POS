import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainhomeComponent  } from "./mainhome/mainhome.component";

// const routes: Routes = [
//   { path: '',redirectTo: 'auth', pathMatch: 'full'},
//   { path: 'auth', loadChildren: () => import('./mainhome/').then(m => m.AuthModule) },
//   { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
 
//   ];
const routes: Routes = [{ path: '', component: MainhomeComponent  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
