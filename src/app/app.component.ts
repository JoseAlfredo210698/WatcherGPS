import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from "firebase"; //añadido


var config = { //añadido
  // apiKey: "AIzaSyDr286Ev_IzfLH3O5e3wSmOtYQTmish5Ag",
  //  authDomain: "pokemon-c761b.firebaseapp.com",
  //  databaseURL: "https://pokemon-c761b.firebaseio.com",
  //  projectId: "pokemon-c761b",
  //  storageBucket: "pokemon-c761b.appspot.com",
  //  messagingSenderId: "388666656565"

  apiKey: "AIzaSyC0G0VX-NUeVOUxrULhbfvvkbHizuZk9Yk",
  authDomain: "pokemon-e9519.firebaseapp.com",
  databaseURL: "https://pokemon-e9519.firebaseio.com",
  projectId: "pokemon-e9519",
  storageBucket: "pokemon-e9519.appspot.com",
  messagingSenderId: "31948812083"
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    firebase.initializeApp(config)
  }
}
