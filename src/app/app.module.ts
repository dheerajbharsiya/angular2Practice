import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {DashBoardComponent} from './dashboard/dashboard.component'
import {RouterModule }   from '@angular/router';
import { HeroComponent }   from './heroes/hero.component';
import { HeroService }   from './heroes/hero.service';
import { HeroDetailsComponent }   from './heroes/hero-details.component';
import { FormsModule }    from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule ,FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroComponent
      },
      {
        path: 'hero-details/:id',
        component: HeroDetailsComponent
      },

    ])
    ],
    providers: [ HeroService ],
  declarations: [ AppComponent, DashBoardComponent, HeroComponent, HeroDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
