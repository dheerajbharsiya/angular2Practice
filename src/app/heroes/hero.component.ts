import { Component }  from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-dashboard',
  template: `<h1>Our Heros</h1>
  <div class="row">
    <div class="col-lg-2" *ngFor="let hero of Hero"> 
        <a [routerLink]="['/hero-details', hero.id]">{{hero.name}}</a>
    </div> 
  </div>`
})
export class HeroComponent implements OnInit {
    private Hero[] = [];

    constructor(private heroService:HeroService) {
    }
    ngOnInit(): void {
    this.Hero = this.heroService.getHeroes();
    }
    //this.Heros = this.heroService.getHeroes();
}