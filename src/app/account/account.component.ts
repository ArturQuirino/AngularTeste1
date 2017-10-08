import {Component} from '@angular/core';
import {ACCOUNT_SERVICE_PROVIDERS} from './account.services';

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls:['app/account/account.component.css'],
  providers: [ACCOUNT_SERVICE_PROVIDERS],

})

export class AccountComponent {
}