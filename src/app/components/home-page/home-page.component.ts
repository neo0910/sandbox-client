import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { randomDarkColor } from 'src/app/utils/ColorUtils.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public socials = [];
  public backgroundColor = 'black';

  constructor(private _api: ApiService) {}
 
  ngOnInit() {
    this.getSocials();
    this._setInitialBackgroundColor();
  }
 
  public getSocials (): void {
    this._api.getSocials().subscribe(socials => this.socials = socials);
  }

  public easterEggTrigger (): void {
    this.backgroundColor = randomDarkColor();
    localStorage.setItem('backgroundColor', this.backgroundColor);
  }

  private _setInitialBackgroundColor (): void {
    if (localStorage.getItem('backgroundColor')) {
      this.backgroundColor = localStorage.getItem('backgroundColor');
    }
  }

}
