import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Pic } from '../../interfaces/pic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  picArray: Pic[] = [];
  constructor(public navCtrl: NavController, private mediaProvider: MediaProvider) {
  }
  ngOnInit() {
    this.getAllFiles();
  }
  getAllFiles() {
    this.mediaProvider.getFlatMedia().subscribe(result => this.picArray = result);
  }
}
