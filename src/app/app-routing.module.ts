import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroUsuariosComponent } from './auth/login/registro-usuarios.component';
import { IndexComponent } from './index/index.component';
import { DetalleComponent } from './producto/detalle/detalle.component';
import { EditarComponent } from './producto/editar/editar.component';
import { ListaComponent } from './producto/lista/lista.component';
import { NuevoComponent } from './producto/nuevo/nuevo.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path:'login', component: LoginComponent},
{path: 'registro', component:RegistroUsuariosComponent},
  {path:'lista', component: ListaComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'nuevo', component: NuevoComponent},
  {path:'editar/:id', component: EditarComponent },
  {path:'**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
