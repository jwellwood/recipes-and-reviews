import { Component, OnInit } from "@angular/core";
import { RecipesService } from "src/app/services/recipes.service";
import { Recipe } from "src/app/models/Recipe";
import {
  faIceCream,
  faCarrot,
  faHamburger,
  faCookieBite
} from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  isAuth: boolean;
  iceCream = faIceCream;
  carrot = faCarrot;
  hamburger = faHamburger;
  cookie = faCookieBite;
  recipes: Recipe[];
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
