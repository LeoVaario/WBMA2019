import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Pic } from '../../interfaces/pic';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  picArray: Pic[] = [];
  mediaPath = 'assets/test.json';
  constructor(public navCtrl: NavController, private http: HttpClient) {
  }
  ngOnInit() {
    this.getImages();
  }
  getImages() {
    this.http.get<Pic[]>(this.mediaPath).subscribe((response: Pic[]) => this.picArray = response);
    console.log(this.picArray);
  }
}

