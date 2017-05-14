import { Hero } from './hero.bean';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  private hero: Hero[] = [
    {
      name:'Dheeraj1', id: 1
    },
    {
      name:'Dheeraj2', id: 2
    }
  ];
  getHeroes(): Hero[] {
    return this.hero;
  }

  getHeroById(id: number): Hero {
    return this.hero.find(h => h.id === id);
  }
}