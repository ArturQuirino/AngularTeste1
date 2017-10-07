import { Component, ViewChild } from '@angular/core';
import {Account} from './account.model';
import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent  {

  private _accounts:Array<Account> = [
    new Account(1, "Bank XYZ", "This is my bank account.", 501.2),
    new Account(2, "Bank Asd", "My secret account.", 1024.10)
  ]

  private _nextId = 3

  private createAccError:string="";
  private accLimit:number = 3;

  private createAcc(newAccount:Account)
  {
    this.createAccError="";

    if(this._accounts.length<this.accLimit){
      newAccount.id=this._nextId++;
      this._accounts.push(newAccount);
      this.form.resetForm();
    }else{
      this.createAccError = "Only " + this.accLimit + " account(s) allowed."
    }
  }

  private removeAcc(index:number){
    this._accounts.splice(index,1)
  }

  @ViewChild(AccountForm) form:AccountForm;
}
