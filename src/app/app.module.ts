import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './components/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './components/recipeBook/recipe/recipe.component';
import { ShoppingComponent } from './components/shoppingList/shopping/shopping.component';
import { DropdownDirective } from './shared/dropdown-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ShoppingComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
