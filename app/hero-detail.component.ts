import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
         <div *ngIf="hero">
            <h2>{{hero.name}} details</h2>
            <div><label for="id"> id: </label> {{hero.id}}</div>
            <div><label for="name">name:</label>
                <input type="text" [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `,
    inputs: ['hero']
})

export class HeroDetailComponent {
    public hero: Hero;
}