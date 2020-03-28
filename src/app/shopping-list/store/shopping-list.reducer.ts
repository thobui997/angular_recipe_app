import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListAction from './shopping-list.action';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListAction.AddIngredient) {
  switch (action.type) {
    case ShoppingListAction.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }

}
