import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
//import { ModalComponent } from './componentes/modal/modal.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,

    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
