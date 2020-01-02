import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import * as firebase from "firebase/app";
import "firebase/firestore";
import {
  faCheck,
  faFileUpload,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"]
})
export class UploaderComponent implements OnInit {
  @Input() file: File;
  @Input() id: string;
  @Input() imageType: string;
  @Output() removeFile: EventEmitter<any> = new EventEmitter();
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  imgSrc: string;
  selectedFilePath: string;
  downloadUrl;
  // Icon
  check = faCheck;
  upload = faFileUpload;
  times = faTimes;
  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.showPreview(this.file);
  }

  showPreview(file) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      // read the image file as a data URL.
      reader.readAsDataURL(this.file);
    }
  }

  startUpload() {
    // Path - imageType will be either reviews or recipes
    const path = `${this.imageType}/${this.id}/${Date.now()}_${this.file.name}`;
    // Ref
    const ref = this.storage.ref(path);
    this.selectedFilePath = path;
    // Task
    this.task = this.storage.upload(path, this.file);
    // Progress
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(async () => {
        this.downloadUrl = await ref.getDownloadURL().toPromise();
        // Add to DB
        const docRef = this.db.collection(this.imageType).doc(this.id);
        docRef.update({
          imageList: firebase.firestore.FieldValue.arrayUnion({
            url: this.downloadUrl,
            path: path
          })
        });
      })
    );
  }

  onRemoveUpload(downloadUrl: string) {
    // Remove from storage
    this.storage.storage.refFromURL(downloadUrl).delete();
    // Remove from DB
    const docRef = this.db.collection(this.imageType).doc(this.id);
    docRef.update({
      imageList: firebase.firestore.FieldValue.arrayRemove({
        url: this.downloadUrl,
        path: this.selectedFilePath
      })
    });
    // Remove from list of files
    this.onRemoveFile();
  }

  onRemoveFile() {
    this.removeFile.emit();
  }
}
