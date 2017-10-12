import {Routes} from '@angular/router';
import {AccountComponent} from './account.component';
import {ListComponent} from './list.component';
import {CreateComponent} from './create.component';
import {DetailsComponent} from './details.component';

export const routes: Routes = [
    {
        path: 'accounts',
        component: AccountComponent,
        children: [
            { path: 'list', component: ListComponent},
            { path: 'create', component: CreateComponent},
            { path: '', redirectTo: 'list', pathMatch: 'full'},
            { path: ':id', component: DetailsComponent}
        ]
    }
];

export const APP_ROUTER_PROVIDERS = routes;
