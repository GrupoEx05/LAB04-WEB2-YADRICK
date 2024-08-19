import { Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { CapitulosComponent } from './capitulos/capitulos.component';

export const routes: Routes = [
  { path: 'personajes', component: PersonajesComponent },
  { path: 'capitulos', component: CapitulosComponent },
  { path: '', redirectTo: '/personajes', pathMatch: 'full' }, 
];
