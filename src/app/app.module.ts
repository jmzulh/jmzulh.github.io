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
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { VisualizerComponent } from './ES/visualizer/visualizer.component';
import { AcercaDeMiComponent } from './ES/acerca-de-mi/acerca-de-mi.component';
import { PortafolioComponent } from './ES/portafolio/portafolio.component';
import { ArvrComponent } from './dialogs/arvr/arvr.component';
import { WebComponent } from './dialogs/web/web.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualizerComponent,
    AcercaDeMiComponent,
    PortafolioComponent,
    ArvrComponent,
    WebComponent,
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
    MatProgressBarModule,
    MatRippleModule,
    MatDialogModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
