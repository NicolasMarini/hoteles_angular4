import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListadoHotelesComponent } from './components/hoteles/listado_hoteles.component';
import { HotelService } from './services/Hotel.service';
import { JsonMapper } from './services/JsonMapper.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoHotelesComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders, HotelService, JsonMapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
