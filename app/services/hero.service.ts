import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve([
			{ "id": 11, "name": "Mr. Nice" },
			{ "id": 12, "name": "Narco" },
			{ "id": 13, "name": "Bombasto" },
			{ "id": 14, "name": "Celeritas" },
			{ "id": 15, "name": "Magneta" },
			{ "id": 16, "name": "RubberMan" },
			{ "id": 17, "name": "Dynama" },
			{ "id": 18, "name": "Dr IQ" },
			{ "id": 19, "name": "Magma" },
			{ "id": 20, "name": "Tornado" }
		]);
	}

	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve([
				{ "id": 11, "name": "Mr. Nice" },
				{ "id": 12, "name": "Narco" },
				{ "id": 13, "name": "Bombasto" },
				{ "id": 14, "name": "Celeritas" },
				{ "id": 15, "name": "Magneta" },
				{ "id": 16, "name": "RubberMan" },
				{ "id": 17, "name": "Dynama" },
				{ "id": 18, "name": "Dr IQ" },
				{ "id": 19, "name": "Magma" },
				{ "id": 20, "name": "Tornado" }
			]), 2000) // 2 seconds
		);
	}
}