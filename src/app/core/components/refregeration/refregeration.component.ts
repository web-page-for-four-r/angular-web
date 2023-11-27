import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/core/services/general.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-refregeration',
  templateUrl: './refregeration.component.html',
  styleUrls: ['./refregeration.component.scss']
})
export class RefregerationComponent implements OnInit {

  data : Date = new Date();
  focus;
  focus1;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.generalService.setBrowserTitle('4RAircon | Refrigeration');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
