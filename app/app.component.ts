/**
 * Created by jerchoo on 7/1/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1> Not my first Angular 2 app </h1>
    `
})

export class AppComponent {}
//this act of exporting turns the file into a module. The name of the file (without extension) is usually the name of the module