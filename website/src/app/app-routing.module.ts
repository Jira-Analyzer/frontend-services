import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjComponent } from './pages/proj/proj.component';
import { MyProjComponent } from './pages/my-proj/my-proj.component';
import { CompareprjComponent } from './pages/compareprj/compareprj.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'projects', component:ProjComponent},
  {path: 'myprojects', component:MyProjComponent},
  {path: 'compare', component: CompareprjComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
