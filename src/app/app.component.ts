import { Component } from '@angular/core';

const template = `
  <h2>{{title}}</h2>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template,
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
