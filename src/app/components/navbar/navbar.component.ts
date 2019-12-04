import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { faLeaf, faStar, faQuestion } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebookSquare,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true }
    }
  ]
})
export class NavbarComponent implements OnInit {
  twitter = faTwitter;
  facebook = faFacebookSquare;
  instagram = faInstagram;
  leaf = faLeaf;
  star = faStar;
  question = faQuestion;
  constructor() {}

  ngOnInit() {}
}
