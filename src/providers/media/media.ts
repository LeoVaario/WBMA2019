import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pic } from '../../interfaces/pic';
/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  picArray: Pic[] = [];
  mediaPathId = 'http://media.mw.metropolia.fi/wbma/media';
  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }

  getMedia() {
    this.http.get<Pic[]>(this.mediaPathId).subscribe((response: Pic[]) => {
      response.forEach(file => {
        this.http.get<Pic>(this.mediaPathId + '/' + file.file_id).subscribe((single: Pic) => {
          this.picArray.push(single);
        });
      });
      console.log('picArray');
      console.log(this.picArray);
    });
  }
  // method using promises
  getAllMedia() {
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
