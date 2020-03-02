import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FirstComponent } from './first/first.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("849389948760-q3jtpfit1tgf148vh2gqmdn9cjvaufej.apps.googleusercontent.com"),
  },
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
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
