import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {routes as AccountRoutes} from './account/account.routes';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    ...AccountRoutes
];

export const APP_ROUTER_PROVIDERS = routes;
