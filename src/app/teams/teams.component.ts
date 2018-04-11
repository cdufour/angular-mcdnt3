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

    let team1: Team = new Team('Juventus', 'juve-logo.png', 'Allegri', 1897, 'Juventus Stadium', 5, 'Italie');
    let team2: Team = new Team('PSG', 'psg-logo.png', 'Emery', 1970, 'Parc des Princes', 3, 'France');
    let team3: Team = new Team('Strasbourg', 'strasbourg-logo.png', 'Laurey', 1906, 'La Meinau', 1, 'France');
    this.teams = [team1, team2, team3];
  }

}
