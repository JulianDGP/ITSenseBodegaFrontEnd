import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//external
//ToastrModul
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleComponent } from './producto/detalle/detalle.component';
import { NuevoComponent } from './producto/nuevo/nuevo.component';
import { EditarComponent } from './producto/Retirar/Retirar.component';
import { ListaComponent } from './producto/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegistroUsuariosComponent } from './auth/login/registro-usuarios.component';
import { ProductoGuardsComponent } from './guards/producto-guards/producto-guards.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { interceptorProvider } from './interceptors/producto-interceptor/producto-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent,
    EditarComponent,
    NuevoComponent,
    LoginComponent,
    RegistroUsuariosComponent,
    ProductoGuardsComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
