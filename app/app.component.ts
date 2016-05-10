import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroDetailComponent } from './views/hero-detail.component'
import { HeroService } from './services/hero.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',
	directives: [HeroDetailComponent],
	providers: [HeroService]
})
export class AppComponent implements OnInit  {
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}


	onSelect(hero: Hero) { this.selectedHero = hero; }
}