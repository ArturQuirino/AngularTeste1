import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(APP_ROUTER_PROVIDERS)],

  declarations: [ AppComponent,
                  AccountsList,
                  AccountForm,
                  HomeComponent,
                  AccountComponent],

  bootstrap:    [ AppComponent ],

  exports: [RouterModule]
})
export class AppModule { }
