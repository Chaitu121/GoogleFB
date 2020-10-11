import { Component } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core'
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//google cloud platform
//clent id of google 
//872413908623-2md980ogd4dkar015ipu0env84bfuuoi.apps.googleusercontent.com
//clent secret of google 
//s4XxCXz6NumOpMK38T61M4dh
//fb id  https://goldplugins.com/documentation/wp-social-pro-documentation/how-to-get-an-app-id-and-secret-key-from-facebook/
//1134459500283856
//secrert
//6a9e6eb400c1fb9513ec3a011c70ea2f
 
// https://www.npmjs.com/package/angularx-social-login

export class AppComponent {
  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) { }
   Name:string='Hi';
   ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
   signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
