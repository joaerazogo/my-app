import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to the jungle';
  curso: string = 'Curso Spring 5 con angular';
  profesor: string ='maestro';
}
