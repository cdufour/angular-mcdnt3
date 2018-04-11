import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {
  @Input('nb') nb: number = 8;

  constructor() { }

  ngOnInit() {
  }

}
