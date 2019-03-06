import { Injectable, NgZone } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse
} from '@ionic-native/background-geolocation/ngx';
import { filter } from 'rxjs/operators'
import { FirebaseService } from './firebase.service';



@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  public watch: any;
  public latitude: number = 0;
  public longitude: number = 0;

  constructor(
    public zone: NgZone,
    private backgroundGeolocation: BackgroundGeolocation,
    private geolocation: Geolocation,
    private firebase: FirebaseService
  ) { }

  startTracking() {
    console.log('startTracking')
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 5000,
      stopOnTerminate: false
    };

    this.backgroundGeolocation.configure(config).then((location: BackgroundGeolocationResponse) => {
      console.log('BackgroundGeolocation:  ', location);
      // Run update inside of Angular's zone
      this.sendDataFirebase(location.latitude, location.longitude)
      this.zone.run(() => {
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        console.log('BackgroundGeolocation-zone:  ', location);
      });
    }, (err) => {
      console.log(err);
    });
    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();

    const options: GeolocationOptions = {
      maximumAge: 3000,
      timeout: 5000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).pipe(
      filter((p: any) => p.code === undefined)
    ).subscribe((position: Geoposition) => {
      console.log('Watch: ', position);
      // Run update inside of Angular's zone
      this.sendDataFirebase(position.coords.latitude, position.coords.longitude)
      this.zone.run(() => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      console.log('Watch-zone: ', position);

      });
    });

  }

  async sendDataFirebase(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;

    this.firebase.sendPosition({
      'latitude': latitude,
      'longitude': longitude
    })

  }

  stopTracking() {
    console.log('stopTracking');
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }



}
