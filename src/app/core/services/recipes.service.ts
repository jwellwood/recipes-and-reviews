import { Injectable, Inject } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Recipe } from "../../shared/models/Recipe";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipeDoc: AngularFirestoreDocument<Recipe>;
  recipes: Observable<Recipe[]>;
  recipe: Observable<Recipe>;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
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
    this.recipeDoc = this.db.doc<Recipe>(`recipes/${id}`);
    this.recipe = this.recipeDoc.snapshotChanges().pipe(
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

  // This is used to add data to existing documents

  addRecipeData(id: string, recipe: Recipe) {
    this.recipeDoc = this.db.doc(`recipes/${id}`);
    this.recipeDoc.set(
      {
        ...recipe
      },
      { merge: true }
    );
  }

  updateRecipe(recipe: Recipe) {
    this.recipeDoc = this.db.doc(`recipes/${recipe.id}`);
    this.recipeDoc.update(recipe);
  }

  deleteRecipe(recipe: Recipe) {
    // Delete from storage
    if (recipe.imageList || recipe.mainImage) {
      let imagesToDelete = [];
      if (recipe.mainImage) {
        imagesToDelete.push(recipe.mainImage);
      }
      if (recipe.imageList) {
        recipe.imageList.forEach(image => {
          imagesToDelete.push(image.url);
        });
      }
      imagesToDelete.forEach(url => {
        // Create a reference to the file to delete
        this.storage.storage.refFromURL(url).delete();
      });
    }
    // Delete from DB
    this.recipeDoc = this.db.doc(`recipes/${recipe.id}`);
    this.recipeDoc.delete();
  }
}
