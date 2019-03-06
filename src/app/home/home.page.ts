import { Component } from '@angular/core';
import { RunnerService } from '../runner.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(
    public runner: RunnerService
  ){}

  async onTrack(){
    this.runner.startTracking()
  }

  async offTrack(){
    this.runner.stopTracking()
  }


}
