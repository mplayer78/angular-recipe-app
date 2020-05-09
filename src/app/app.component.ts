import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recipeVisible: boolean = true;
  shoppingVisible: boolean = false;

  onNavigationRequest(navString: string) {
    console.log('Nav Request');
    if (navString === 'recipe') {
      this.recipeVisible = true;
      this.shoppingVisible = false;
    } else if (navString === 'shopping') {
      this.recipeVisible = false;
      this.shoppingVisible = true;
    }
  }
}
