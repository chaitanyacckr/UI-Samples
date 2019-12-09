import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router'
import { CommonModule } from '@angular/common';
import {AccountSummaryComponent} from '../account-summary/account-summary.component'
import {FundsTransferComponent} from '../funds-transfer/funds-transfer.component'
import {UserProfileComponent} from '../user-profile/user-profile.component'
import {AddBeneficiaryComponent} from '../add-beneficiary/add-beneficiary.component'
import {AccountActivityComponent} from '../account-activity/account-activity.component'
import {LoginComponentComponent} from '../login-component/login-component.component'
import {RegisterUserComponent} from '../register-user/register-user.component'
import {OpenAccountComponent} from '../open-account/open-account.component'


const routes:Route[] = [
  {
    path:'acctSummary',
    component: AccountSummaryComponent
  },
  {
    path:'fundsTransfer',
    component: FundsTransferComponent
  },
  {
    path:'userProfile',
    component: UserProfileComponent
  },
  {
    path:'addBeneficiary',
    component: AddBeneficiaryComponent
  },
  {
    path:'accountActivity',
    component: AccountActivityComponent
  },
  {
    path:'',
    component: LoginComponentComponent
  },
  {
    path:'register',
    component: RegisterUserComponent
  },
  {
    path:'openAccount',
    component: OpenAccountComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
})
export class AppRoutingModule { }
