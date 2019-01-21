import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Pic } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private mediaProvider: MediaProvider) {
  }
  ngOnInit() {
    this.getAllFiles();
  }
  getAllFiles() {
    this.mediaProvider.getMedia();
  }
}
