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
    template: `
        <h1> {{ title }} </h1>
        <h2> {{ hero.name }} details! </h2>
        <div><label for="id">id: </label> {{hero.id}} </div>
        <div>
            <label>name: </label>
            <div><input [(ngModel)]="hero.name" placeholder="name"></div>
        </div>
    `
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public hero:Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
//this act of exporting turns the file into a module. The name of the file (without extension) is usually the name of the module