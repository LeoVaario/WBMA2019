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
  mediaPathId = 'http://media.mw.metropolia.fi/wbma/media';
  constructor(public navCtrl: NavController, private http: HttpClient) {
  }
  ngOnInit() {
    this.getImages();
  }
  getImages() {
    this.http.get<Pic[]>(this.mediaPathId).
      toPromise().
      then((response: Pic[]) => {
        Promise.all(response.map(
          file => this.http.get<Pic>(this.mediaPathId + '/' + file.file_id).
            toPromise())).then(result => {
              this.picArray = result;
              console.log(this.picArray);
            });
      });
  }
}
