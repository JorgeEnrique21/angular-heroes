import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Fabiano' },
  { id: 12, name: 'Xandampião' },
  { id: 13, name: 'Geraldobombástico' },
  { id: 14, name: 'Lenor, a mulher labirinto' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero : Hero = undefined;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
}
