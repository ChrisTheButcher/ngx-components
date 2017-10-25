import { Component, OnInit } from '@angular/core';
import { YoutubeState } from './youtube.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ready(event) {
    console.log("YT_ready", event)
  }

  stateChange(event) {
    console.log("YT_state_change", event)
  }
}
