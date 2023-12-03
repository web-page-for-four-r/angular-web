import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.scss']
})
export class SubHeadingComponent implements OnInit {
  @Input() heading = '';
  @Input() isUpper = true;
  constructor() { }

  ngOnInit(): void {
  }

}
