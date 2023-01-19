import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { VisualizerComponent } from './ES/visualizer/visualizer.component';
import { AcercaDeMiComponent } from './ES/acerca-de-mi/acerca-de-mi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualizerComponent,
    AcercaDeMiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    AppRoutingModule,
    MatProgressBarModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
