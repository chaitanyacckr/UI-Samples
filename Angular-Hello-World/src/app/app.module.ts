import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { AccountActivityComponent } from './account-activity/account-activity.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { OpenAccountComponent } from './open-account/open-account.component';



@NgModule({
  declarations: [
    AppComponent,
    AccountSummaryComponent,
    FundsTransferComponent,
    UserProfileComponent,
    AddBeneficiaryComponent,
    AccountActivityComponent,
    HeaderComponentComponent,
    LoginComponentComponent,
    RegisterUserComponent,
    OpenAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
