import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { KeyValuePipe } from '@angular/common';
//import { DashboardComponent } from './vistas/dashboard/dashboard.component';
//import { CrearComponent } from './vistas/crear/crear.component';
//import { ActualizarComponent } from './vistas/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
    //DashboardComponent,
    //CrearComponent,
    //ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeyValuePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
