import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { HttpModule } from '@angular/http';
import { FirebaseProvider } from './../providers/firebase/firebase';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//database connection
export const firebaseConfig = {
    apiKey: "AIzaSyDaIgoZxscr59GTOQNRdCNXo8NNO3t_VKw",
    authDomain: "af2-lists-62095.firebaseapp.com",
    databaseURL: "https://af2-lists-62095.firebaseio.com",
    projectId: "af2-lists-62095",
    storageBucket: "",
    messagingSenderId: "751234326801"  
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
