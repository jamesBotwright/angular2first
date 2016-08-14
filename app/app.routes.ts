import { provideRouter, RouterConfig }  from '@angular/router';

import { PalmsComponent } from './palms.component';
import { DashboardComponent } from './dashboard.component';
import { PalmDetailComponent } from './palm-detail.component';

const routes: RouterConfig = [
  {
    path: 'palms',
    component: PalmsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: PalmDetailComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
