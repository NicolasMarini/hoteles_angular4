import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListadoHotelesComponent } from './components/hoteles/listado_hoteles.component';
import { HotelService } from './services/Hotel.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoHotelesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
