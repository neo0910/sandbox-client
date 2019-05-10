import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public socials = [];
  private colors = [
    'black',
    '#762915',
    '#04395b',
    '#7c2488',
    '#a90143',
    '#ffebee',
    '#e9834c',
    '#d32f2f',
    '#e91e63',
    '#ea80fc',
    '#e1bee7',
    '#9575cd',
    '#536dfe',
    '#64b5f6',
    '#0277bd',
    '#26c6da',
    '#00897b',
    '#a5d6a7',
    '#8bc34a',
    '#c0ca33',
    '#f9a825',
    '#ffe082',
    '#ffd180',
    '#e64a19',
    '#6d4c41',
    '#546e7a',
    '#424242',
  ];

  constructor(private api: ApiService) {}
 
  ngOnInit() {
    this.getSocials();
  }
 
  public getSocials (): void {
    this.api.getSocials().subscribe(socials => this.socials = socials);
  }

  public easterEggTrigger (): void {
    const container = document.getElementsByClassName('main-container')[0];
    const randomIndex = Math.floor(Math.random() * (this.colors.length - 1));

    container.setAttribute('style', `background-color: ${this.colors[randomIndex]};`);
  }

}
