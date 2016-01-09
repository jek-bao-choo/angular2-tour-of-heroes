/**
 * Created by jerchoo on 7/1/16.
 */
import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
         }
         .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 10em;
         }
         .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0em;
            height: 1.6em;
            border-radius: 4px;
         }
         .heroes li.selected:hover {
            color: white;
         }
         .heroes li:hover {
            color: #607D8B;
            background-color: #EEE;
            left: .1em;
         }
         .heroes .text {
            position: relative;
            top: -3px;
         }
         .heroes . badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0em 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0px 0px 4px;
         }
    `],
    template: `
        <h2>My heroes </h2>
        <ul class="heroes"> <!--class.selected is Styling the selection-->
        <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
            <!--each hero goes here-->
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
        </ul>

        <br>

        <div *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details</h2>
        <div><label for="id"> id: </label> {{selectedHero.id}}</div>
        <div><label for="name">name:</label>
            <input type="text" [(ngModel)]="selectedHero.name" placeholder="name">
        </div>
        </div>
    `
})
//The parenthesis identify the <li> element’s click event as the target. The expression to the right of the equal sign calls the AppComponent method, onSelect(), passing the local template variable hero as an argument. That’s the same hero variable we defined previously in the ngFor.

export class AppComponent {
    public title = 'Tour of Heroes';
    public heroes = HEROES;
    public selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}//this act of exporting turns the file into a module. The name of the file (without extension) is usually the name of the module

var HEROES:Hero[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];