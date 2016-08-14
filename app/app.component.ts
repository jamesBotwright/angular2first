import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';					
import { PalmService } from './palm.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/palms']" routerLinkActive="active">Palms</a>
    </nav>    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [PalmService]
})

export class AppComponent {
  title = 'The Palm Collection';
}
