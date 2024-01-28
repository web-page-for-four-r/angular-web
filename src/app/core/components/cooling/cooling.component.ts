import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/core/services/general.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-cooling',
  templateUrl: './cooling.component.html',
  styleUrls: ['./cooling.component.scss']
})
export class CoolingComponent implements OnInit {

  data : Date = new Date();

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.generalService.setBrowserTitle('FOUR R Aircon | Cooling');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
