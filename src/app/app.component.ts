import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-recipes-site';
  loadedFeature = 'recipe';
  
  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }
}
