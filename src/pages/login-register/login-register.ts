import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginResponse, User } from '../../interfaces/media';

/**
 * Generated class for the LoginRegisterPage page.
 */

@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {

  user: User = { username: null };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  login() {
    this.mediaProvider.login(this.user).subscribe(
      (response: LoginResponse) => {
        console.log(response);
        this.mediaProvider.loggedIn = true;
        // TODO: save the token to localstorage
        // move to the home page (use navCtrl)
      },
      error => {
        console.log(error);
      });
  }

  // TODO: create a register method
  // before trying to register, check if username is available

}
