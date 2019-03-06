import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RunnerService } from './runner.service';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { AngularFireModule } from '@angular/fire'

const configFirebase = {
  //  apiKey: "AIzaSyDr286Ev_IzfLH3O5e3wSmOtYQTmish5Ag",
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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // AngularFireModule.initializeApp(configFirebase),
  ],
  providers: [
    RunnerService,
    BackgroundGeolocation,
    Geolocation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
