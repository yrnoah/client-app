import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../service/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  async ngOnInit(): Promise<void> {
    try {
      const resp = await this.heroService.getHeroes();
      this.heroes = resp.slice(1, 5);
    } catch (e) { console.error(e); }
  }
}
