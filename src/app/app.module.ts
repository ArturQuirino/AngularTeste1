import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ListComponent } from './account/list.component';
import { CreateComponent } from './account/create.component';
import { DetailsComponent } from './account/details.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateComponent as TransactionCreateComponent } from './transaction/create.component';

import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(APP_ROUTER_PROVIDERS)],

  declarations: [
    AppComponent,
    AccountsList,
    AccountForm,
    HomeComponent,
    AccountComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent,
    TransactionComponent,
    TransactionCreateComponent
  ],

  bootstrap:    [ AppComponent ],

  exports: [RouterModule]
})
export class AppModule { }
