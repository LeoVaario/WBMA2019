import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pic } from '../../interfaces/pic';
import { Observable } from 'rxjs';
/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  //picArray: Pic[] = [];
  mediaPathId = 'http://media.mw.metropolia.fi/wbma/media';
  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }
  // part A
  /*getMedia() {
    this.http.get<Pic[]>(this.mediaPathId).subscribe((response: Pic[]) => {
      response.forEach(file => {
        this.http.get<Pic>(this.mediaPathId + '/' + file.file_id).subscribe((single: Pic) => {
          this.picArray.push(single);
        });
      });
      console.log('picArray');
      console.log(this.picArray);
    });
  }*/

  // Part B
  getFlatMedia(): Observable<Pic[]> {
    return this.http.get<Pic[]>(this.mediaPathId).flatMap((response: Pic[]) => {    // .flatMap replaces .then in gatAllMedia()
      const obsPics = response.map(file => this.fetchSingleData(file.file_id));
      // sequencing the observables (takes array of observables and turns into an array that is an observable)
      return Observable.zip(...obsPics); // ... transforms array into parameter list
    });
  }

  fetchSingleData(id: number) : Observable<Pic> {
    return this.http.get<Pic>(this.mediaPathId + '/' + id);
  }
  // method using promises
  /*getAllMedia() {
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
  }*/
}
