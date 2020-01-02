import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  faUserFriends,
  faHeart,
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
  people = faUserFriends;
  heart = faHeart;
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
          { title: "Details", link: `/recipes/${this.id}/edit-details` },
          { title: "Comment", link: `/recipes/${this.id}/add-comment` },
          { title: "Ingredients", link: `/recipes/${this.id}/add-ingredients` },
          { title: "Steps", link: `/recipes/${this.id}/add-steps` },
          { title: "Image Gallery", link: `/recipes/${this.id}/add-gallery` },
          { title: "Cover Image", link: `/recipes/${this.id}/add-image` }
        ];
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
