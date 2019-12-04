import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Recipe } from "../models/Recipe";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipesDoc: AngularFirestoreDocument<Recipe>;
  recipes: Observable<Recipe[]>;
  recipe: Observable<Recipe>;

  constructor(private db: AngularFirestore) {
    this.recipesCollection = this.db.collection("recipes");
  }

  getRecipes(): Observable<Recipe[]> {
    this.recipes = this.recipesCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Recipe;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    return this.recipes;
  }

  getRecipe(id: string): Observable<Recipe> {
    this.recipesDoc = this.db.doc<Recipe>(`recipes/${id}`);
    this.recipe = this.recipesDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Recipe;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.recipe;
  }

  newRecipe(recipe: Recipe) {
    this.recipesCollection.add(recipe);
  }

  updateRecipe(recipe: Recipe) {
    this.recipesDoc = this.db.doc(`recipes/${recipe.id}`);
    this.recipesDoc.update(recipe);
  }

  deleteRecipe(recipe: Recipe) {
    this.recipesDoc = this.db.doc(`reviews/${recipe.id}`);
    this.recipesDoc.delete();
  }
}
