import {Component} from '@angular/core';
import {ACCOUNT_SERVICE_PROVIDERS} from './account.services';
import {TRANSACTION_SERVICE_PROVIDERS} from '../transaction/transaction.service';

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls:['app/account/account.component.css'],
  providers: [ACCOUNT_SERVICE_PROVIDERS, TRANSACTION_SERVICE_PROVIDERS],

})

export class AccountComponent {
}