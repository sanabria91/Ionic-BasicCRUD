import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public afdb: AngularFireDatabase) {} 

  getItems(){
    return this.afdb.list('/songs/');
  }

  addItem(title:string,artist:string){
    this.afdb.list('/songs/').push({title:title,artist:artist});
  }

  removeItem(id: string){
    this.afdb.list('/songs/').remove(id);
  }

  updateSong(songId:string, title:string, artist:string){
    this.afdb.list('/songs/').update(songId,{title:title, artist:artist});
  }

}
