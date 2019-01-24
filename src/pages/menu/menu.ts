import { MediaProvider } from './../../providers/media/media';
import { LogoutPage } from './../logout/logout';
import { LoginRegisterPage } from './../login-register/login-register';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(
    public mediaProvider: MediaProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  tab1Root = HomePage;
  tab2Root = LoginRegisterPage;
  tab3Root = LogoutPage;

}
