import { Component, OnInit } from "@angular/core";
import {
  faIceCream,
  faCarrot,
  faHamburger,
  faCookieBite,
  faUserFriends,
  faClock,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { RecipesService } from "src/app/core/services/recipes.service";
import { Recipe } from "src/app/shared/models/Recipe";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  isAuth: boolean;
  recipes: Recipe[];
  // Icons
  iceCream = faIceCream;
  carrot = faCarrot;
  hamburger = faHamburger;
  cookie = faCookieBite;
  people = faUserFriends;
  clock = faClock;
  heart = faHeart;
  constructor(
    private authService: AuthService,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
}