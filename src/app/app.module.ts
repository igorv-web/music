import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { RockComponent } from './pages/rock/rock.component';
import { ElectroComponent } from './pages/electro/electro.component';
import { HipHopComponent } from './pages/hip-hop/hip-hop.component';
import { PopComponent } from './pages/pop/pop.component';
import { RBComponent } from './pages/r-b/r-b.component';
import { IndieComponent } from './pages/indie/indie.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RockComponent,
    ElectroComponent,
    HipHopComponent,
    PopComponent,
    RBComponent,
    IndieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
