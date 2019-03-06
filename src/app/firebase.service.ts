import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  ref = firebase.database().ref()

  constructor() { }


  async sendPosition(position: any){
    this.ref.push().set(position).then(() => {
      console.log('Send-OK: ', position)
      // const toast = await this.toastController.create({
      //   message: 'Proceso exitoso',
      //   duration: 3000
      // });
      // await toast.present();
    })
  }
}
