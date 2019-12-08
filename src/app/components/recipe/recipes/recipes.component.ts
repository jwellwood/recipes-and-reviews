import { Component, OnInit } from "@angular/core";
import { RecipesService } from "src/app/services/recipes.service";
import { Recipe } from "src/app/models/Recipe";
import {
  faIceCream,
  faCarrot,
  faHamburger,
  faCookieBite
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"]
})
export class RecipesComponent implements OnInit {
  iceCream = faIceCream;
  carrot = faCarrot;
  hamburger = faHamburger;
  cookie = faCookieBite;
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }
}
