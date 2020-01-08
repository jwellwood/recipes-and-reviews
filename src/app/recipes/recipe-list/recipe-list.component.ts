import { Component, OnInit } from "@angular/core";
import {
  faIceCream,
  faCarrot,
  faHamburger,
  faCookieBite,
  faUserFriends,
  faClock,
  faSeedling
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
  introText: string =
    "Love cooking? Looking for some inspiration? Look no further! Starters, mains, desserts and sides, we've got you covered no matter what the occasion";
  // Icons
  iceCream = faIceCream;
  carrot = faCarrot;
  hamburger = faHamburger;
  cookie = faCookieBite;
  people = faUserFriends;
  clock = faClock;
  seedling = faSeedling;
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
