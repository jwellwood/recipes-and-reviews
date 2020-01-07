import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-review-gallery",
  templateUrl: "./add-review-gallery.component.html",
  styleUrls: ["./add-review-gallery.component.scss"]
})
export class AddReviewGalleryComponent implements OnInit, OnDestroy {
  id: string;
  files: File[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Get id of review to add to
    this.id = this.route.snapshot.params["id"];
  }

  ngOnDestroy() {
    this.files = [];
  }

  onSelectFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  onRemoveFile(e: any, i: number) {
    this.files.splice(i, 1);
  }

  onSubmit() {
    this.router.navigate([`/reviews/${this.id}`]);
  }
}
