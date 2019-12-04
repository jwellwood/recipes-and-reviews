import { Component, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebookSquare,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  leaf = faLeaf;
  twitter = faTwitter;
  facebook = faFacebookSquare;
  instagram = faInstagram;
  constructor() {}

  ngOnInit() {}
}
