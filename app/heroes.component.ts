import { Hero } from './hero';
import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
    title = "Tour of Heroes";
    heroes: Hero[];
    selectedHero: Hero;

    constructor (
        private router: Router,
        private heroService: HeroService) { }
    
    getHeroes() {
        this.heroService.getHeroes().then( heroes => this.heroes = heroes );
    }
    
    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id}])
    }
}
