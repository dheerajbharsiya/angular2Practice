import { Component }  from '@angular/core';
import { HeroService } from './hero.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from './hero.bean';
import { Location } from '@angular/common';

@Component({
  selector: 'hero-details',
  template: `<h1>Hero Details</h1>
  <div class="row">
    <div class="col-lg-2">
    <input type="text" [(ngModel)]="Hero.name"> 
    <button (click)="goBack()">Hero-Dashboard</button>
    </div> 
  </div>`
})

export class HeroDetailsComponent implements OnInit {
    private Hero:Hero;
    private id: number;
    constructor(private heroService:HeroService,private router: ActivatedRoute, private location: Location) {
    };

    ngOnInit(): void {
    this.router.params.subscribe(xyz=> this.id = xyz['id']);
    if(this.id) {
       this.Hero = this.heroService.getHeroById(+this.id);   
    }
    };

    goBack(): void {
      this.location.back();
    };

}  