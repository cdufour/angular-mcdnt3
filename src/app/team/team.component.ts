import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../model/Team';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  //team: Team = new Team('Juventus', 'juve-logo.png', 'Allegri', 1897);
  @Input('team') team: Team;
  
  constructor() { }

  ngOnInit() {

  }

}
