import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PersonajesComponent } from './personajes/personajes.component';
import { CapitulosComponent } from './capitulos/capitulos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, RouterModule, PersonajesComponent, CapitulosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RickAndMortyAPI';
}
