import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from '../service/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}
  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe((hero: Hero) => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  async save(): Promise<any> {
    try {
      await this.heroService.update(this.hero);
      this.goBack();
    } catch (e) { console.error(e); }
  }
}
