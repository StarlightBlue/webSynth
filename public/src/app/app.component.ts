import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebSynth';
  oscillators = [{type: "basic"}, {type: "pulse"}, {type: "fm"}, {type: "am"}, {type: "fat"}, {type: "pwm"}]
  constructor(private _router: Router){}

  public onChange(event): void {
    const newVal = event.target.value;
    this._router.navigate([`/${newVal}`]);
  }
}
