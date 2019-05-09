import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public socials = [];
  private colors = ['black', '#762915', '#04395b', '#7c2488', '#a90143', '#e9834c'];

  constructor(private api: ApiService) {}
 
  ngOnInit() {
    this.getSocials();
  }
 
  public getSocials (): void {
    this.api.getSocials()
      .subscribe(socials => {
        this.socials = socials;
        console.log(this.socials);
      });
  }

  public easterEggTrigger (): void {
    const container = document.getElementsByClassName('main-container')[0];
    const randomIndex = Math.floor(Math.random() * (this.colors.length - 1));

    container.setAttribute('style', `background-color: ${this.colors[randomIndex]};`);
  }

}
