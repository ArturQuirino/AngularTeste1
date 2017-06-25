import { Component } from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent  {
  private _accounts:Array<Account> = [
    {
      id:1,
      title:"Bank Xyz",
      description:"This is my bank account.",
      balance:501.2
    },
    new Account(2, "Bank Asd", "My secret account.", 1024.10)
  ]

  private _nextId = 3
  private _selected:Array<boolean> = [false,false]

  private createAcc(titleEl:any, descEl:any, balEl:any)
  {
    this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value))
    this._nextId++
    this._selected.push(false);

    titleEl.value = ""
    descEl.value = ""
    balEl.value = 0
  }

  private removeAcc(index:number){
    this._accounts.splice(index,1)
    this._selected.splice(index,1)
  }

  private select(index:number){
    this._selected[index] = !this._selected[index];
  }
}
