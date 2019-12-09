import { Component, OnInit } from '@angular/core';
import {Account} from '../model/Account';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  accounts:Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
   this.getAccounts();
  }

  getAccounts() {
    this.accounts =  this.accountService.getAccounts();
    
  }

}
