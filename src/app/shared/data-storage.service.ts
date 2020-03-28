import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap} from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    return this.httpClient
      .put('https://thobt-db.firebaseio.com/recipes.json', recipes)
      .subscribe(responsive => {
        console.log(responsive);
      });
  }

  fetchRecipes() {
    return this.httpClient
      .get<Recipe[]>('https://thobt-db.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
