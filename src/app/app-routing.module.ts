import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { CrearComponent } from './vistas/crear/crear.component';
import { ActualizarComponent } from './vistas/actualizar/actualizar.component';

const routes: Routes = [
  {path:'', redirectTo:'listarVideos', pathMatch:'full' },
  {path:'listarVideos', component:DashboardComponent },
  {path:'crearVideo', component:CrearComponent },
  {path:'actualizarVideo', component:ActualizarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,CrearComponent,ActualizarComponent]
