import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../components/shoppingList/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from '../components/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from '../components/recipeBook/recipe-list/recipe-list.component';
import { RecipeComponent } from '../components/recipeBook/recipe/recipe.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    // canActivateChild: [AuthGuardService],
    component: RecipeComponent,
    children: [
      { path: ':id', component: RecipeDetailComponent },
      // { path: ':id/edit', component: RecipeEdit },
    ],
  },
  {
    path: 'shoppingList',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)], // this is configuring the routerModule with our routes
  exports: [RouterModule], // this is surfacing it for the calling module to use
})
export class RoutingModule {}
