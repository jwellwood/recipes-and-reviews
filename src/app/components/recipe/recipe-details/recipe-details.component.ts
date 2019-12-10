import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/Recipe";
import { RecipesService } from "src/app/services/recipes.service";
import { Router, ActivatedRoute } from "@angular/router";
import {
  faUtensils,
  faHeart,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"]
})
export class RecipeDetailsComponent implements OnInit {
  constructor(
    private recipesService: RecipesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  isAuth: boolean;
  id: string;
  baseRoute: string = "recipes";
  recipe: Recipe;
  utensils = faUtensils;
  heart = faHeart;
  clock = faClock;

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
    this.recipesService.getRecipe(this.id).subscribe(recipe => {
      if (recipe != null) {
        this.recipe = recipe;
      }
    });
  }

  onDelete() {
    if (confirm("Are you sure?")) {
      this.recipesService.deleteRecipe(this.recipe);
      this.router.navigate(["/recipes"]);
    }
  }
}
