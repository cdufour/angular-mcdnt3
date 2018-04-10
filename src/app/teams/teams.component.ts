import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  team_display: string;

  constructor() { }

  ngOnInit() {
    this.team_display = 'a2';

    let team1: Team = new Team('Juventus', 'juve-logo.png', 'Allegri', 1897, 'Juventus Stadium');
    let team2: Team = new Team('PSG', 'psg-logo.png', 'Emery', 1970, 'Parc des Princes');
    let team3: Team = new Team('Strasbourg', 'strasbourg-logo.png', 'Jessy', 1923, 'La Meineau');
    this.teams = [team1, team2, team3];
  }

}
