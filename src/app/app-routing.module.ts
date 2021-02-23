import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { RockComponent } from './pages/rock/rock.component';
import { ElectroComponent } from './pages/electro/electro.component';
import { HipHopComponent } from './pages/hip-hop/hip-hop.component';
import { PopComponent } from './pages/pop/pop.component';
import { RBComponent } from './pages/r-b/r-b.component';
import { IndieComponent } from './pages/indie/indie.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'rock', component: RockComponent},
  {path: 'electro', component: ElectroComponent},
  {path: 'hip-hop', component: HipHopComponent},
  {path: 'pop', component: PopComponent},
  {path: 'r-b', component: RBComponent},
  {path: 'indie', component: IndieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
