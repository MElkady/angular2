import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './app/views/hero-detail.html'
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}