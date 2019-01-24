import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pic } from '../../interfaces/pic';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  mediaArray: Pic[] = [];
  mediaFilePath = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(public navCtrl: NavController, private mediaProvider: MediaProvider) {

  }

  ngOnInit() {
    this.getAllFiles();
  }

  getAllFiles() {
    this.mediaProvider.getFlatMedia().subscribe((result: Pic[]) => {
      // add thumbnails to media objects (for videos too)
      result.map(media => {
        media.thumbnails = {
          'w160': media.filename.split('.')[0] + '-tn160.png'
        }
        return media;
      });
      this.mediaArray = result;
      // console.log(this.mediaArray);
    },
    error => console.log(error));
  }

  showImage(fileId: number) {
    // this.photoViewer.show(image);
    this.mediaProvider.fetchSingleData(fileId).subscribe(result => {
      console.log(result);
    }, error => { console.log(error); }
    );
  }

}
