import { Injectable } from '@angular/core';

 
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccounts(){
    return [
      {acctNumber:'Account1',acctType:'Checkings',currentBalance:'Rs 1,0001.00'},
      {acctNumber:'Account2',acctType:'Savings',currentBalance:'Rs 2,0001.00'},
      {acctNumber:'Account3',acctType:'Mutual Funds',currentBalance:'Rs 3,0001.00'}
    ];
  }

}
