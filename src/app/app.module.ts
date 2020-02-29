import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FirstComponent } from './first/first.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id"),
  },
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SocialLoginModule,
    SigninComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {
  	provide: AuthServiceConfig,
	  useFactory: provideConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
