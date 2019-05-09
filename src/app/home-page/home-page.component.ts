import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  private _colors = ['black', '#762915', '#04395b', '#7c2488', '#a90143', '#e9834c'];

  public easterEggTrigger (): void {
    const container = document.getElementsByClassName('main-container')[0];
    const randomIndex = Math.floor(Math.random() * (this._colors.length - 1));

    container.setAttribute('style', `background-color: ${this._colors[randomIndex]};`);
  }

}
