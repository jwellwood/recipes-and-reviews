import { Component, OnInit } from "@angular/core";
import { Recipe } from "src/app/models/Recipe";
import { RecipesService } from "src/app/services/recipes.service";
import { Router, ActivatedRoute } from "@angular/router";
import {
  faTrash,
  faUtensils,
  faHeart,
  faClock,
  faCarrot,
  faPepperHot,
  faIceCream,
  faSeedling,
  faCookieBite,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"]
})
export class RecipeDetailsComponent implements OnInit {
  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: string;
  recipe: Recipe;
  leaf = faLeaf;
  utensils = faUtensils;
  pepper = faPepperHot;
  iceCream = faIceCream;
  carrot = faCarrot;
  plant = faSeedling;
  heart = faHeart;
  clock = faClock;
  cookie = faCookieBite;
  trash = faTrash;
  typeIcon: any = null;
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.recipesService.getRecipe(this.id).subscribe(recipe => {
      if (recipe != null) {
        this.recipe = recipe;
        switch (recipe.type) {
          case "Starter":
            this.typeIcon = this.carrot;
            break;
          case "Side":
            this.typeIcon = this.cookie;
            break;
          case "Main":
            this.typeIcon = this.utensils;
            break;
          case "Dessert":
            this.typeIcon = this.iceCream;
            break;
          default:
            this.typeIcon = this.clock;
            break;
        }
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
