import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes

import { HeaderComponent } from './components/header/header.component';
import { ListadoHotelesComponent } from './components/hoteles/listado_hoteles.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    {path: '', component: ListadoHotelesComponent},
    {path: 'hoteles', component: ListadoHotelesComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);