import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songs: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController,
              public actionsheetCtrl: ActionSheetController) {
    this.songs = this.firebaseProvider.getItems();
  }

  addSong(){
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: "Enter new song name to add",
      inputs: [
        {
          name:'title',
          placeholder: 'Title'
        },
        {
          name: 'artist',
          placeholder: 'Artist'
        },
      ],
      buttons:[
        {
          text: 'Cancel',
          handler: data=>{
            console.log('Cancel Clicked');
          }
        },
        {
          text: 'Save',
          handler: data=>{
            this.firebaseProvider.addItem(data.title, data.artist);
          }
        }
      ]
    });
    prompt.present();
  }



  showOptions(songId, title, artist){
    let actionSheet = this.actionsheetCtrl.create({
      title:'Select Option For Song',
      buttons:[
        {
          text: 'Delete Song',
          role: 'destructive',
          handler: ()=>{
            this.firebaseProvider.removeItem(songId);
          }
        },
        {
          text: 'Update Song',
          handler: ()=>{
            this.updateSong(songId, title, artist);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () =>{
            console.log('Cancel Clicked');
          }
        }
      ]
    })
    actionSheet.present();
  }

  updateSong(songId, title, artist){
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: 'Update song details',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: title
        },
        {
          name: 'artist',
          placeholder: 'Artist',
          value: artist
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data=> {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.firebaseProvider.updateSong(songId, data.title, data.artist);
          }
        }
      ]
    });
    prompt.present();
  }

}
