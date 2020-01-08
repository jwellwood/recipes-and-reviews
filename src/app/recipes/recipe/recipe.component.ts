import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  faUserAlt,
  faSeedling,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { Recipe } from "src/app/shared/models/Recipe";
import { RecipesService } from "src/app/core/services/recipes.service";
import { AuthService } from "src/app/core/auth/auth.service";
@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"]
})
export class RecipeComponent implements OnInit {
  isAuth: boolean;
  id: string;
  recipe: Recipe;
  buttons: any = [];
  // Icons
  people = faUserAlt;
  seedling = faSeedling;
  clock = faClock;
  constructor(
    private recipesService: RecipesService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
        this.buttons = [
          {
            title: "Details",
            link: `/recipes/${this.id}/edit-details`,
            isEdit: recipe.id ? true : false
          },
          {
            title: "Comment",
            link: `/recipes/${this.id}/add-comment`,
            isEdit: recipe.mainComment ? true : false
          },
          {
            title: "Ingredients",
            link: `/recipes/${this.id}/add-ingredients`,
            isEdit: recipe.ingredients ? true : false
          },
          {
            title: "Steps",
            link: `/recipes/${this.id}/add-steps`,
            isEdit: recipe.steps ? true : false
          },
          {
            title: "Image Gallery",
            link: `/recipes/${this.id}/add-gallery`,
            isEdit: recipe.imageList ? true : false
          },
          {
            title: "Cover Image",
            link: `/recipes/${this.id}/add-image`,
            isEdit: recipe.mainImage ? true : false
          }
        ];
      }
    });
  }

  onDelete() {
    // TODO add a modal confirm instead of browser
    if (
      confirm(
        "You will lose all data for this recipe permanently. Are you sure?"
      )
    ) {
      this.recipesService.deleteRecipe(this.recipe);
      this.router.navigate(["/recipes"]);
    }
  }
}
