import {Routes} from '@angular/router';
import {AccountComponent} from './account.component';
import {ListComponent} from './list.component';
import {CreateComponent} from './create.component'

export const routes: Routes = [
    {
        path: 'accounts',
        component: AccountComponent,
        children: [
            { path: 'list', component: ListComponent},
            { path: 'create', component: CreateComponent},
            { path: '', redirectTo: 'list', pathMatch: 'full'}
        ]
    }
];

export const APP_ROUTER_PROVIDERS = routes;
