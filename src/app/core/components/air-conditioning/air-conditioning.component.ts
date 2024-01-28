import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'app/core/services/general.service';

@Component({
  selector: 'app-air-conditioning',
  templateUrl: './air-conditioning.component.html',
  styleUrls: ['./air-conditioning.component.scss']
})
export class AirConditioningComponent implements OnInit {

  data : Date = new Date();
  focus;
  focus1;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.generalService.setBrowserTitle('FOUR R Aircon | Air Conditioning');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
