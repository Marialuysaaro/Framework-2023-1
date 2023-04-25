import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GridComponent } from './components/grid/grid.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent}, 
  { path:'hero', component: HeroComponent},
  { path:'grid', component: GridComponent},
  { path:'dashboard', component: DashboardComponent},

  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'**', component:PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
