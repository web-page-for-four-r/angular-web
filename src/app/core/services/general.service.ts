import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private titleService:Title) { }

  setBrowserTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
