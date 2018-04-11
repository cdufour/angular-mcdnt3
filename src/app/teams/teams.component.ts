import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';
import { COUNTRIES } from '../datasources';

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  teamsFiltered: Team[] = []; // tableau servant à stocker les retours de la function .filter

  team_display: string;
  countries: string[] = [];
  test: boolean = true;
  countrySelected: string;

  constructor() { }

  ngOnInit() {
    this.countries = COUNTRIES;
    this.team_display = 'a2';
    let team1: Team = new Team('Juventus', 'juve-logo.png', 'Allegri', 1897, 'Juventus Stadium', 5, 'Italie');
    let team2: Team = new Team('PSG', 'psg-logo.png', 'Emery', 1970, 'Parc des Princes', 3, 'France');
    let team3: Team = new Team('Strasbourg', 'strasbourg-logo.png', 'Laurey', 1906, 'La Meinau', 1, 'France');
    this.teams = [team1, team2, team3]; // initialisation de teams
    this.teamsFiltered = this.teams; // initialisation de teamsFiltered
  }

  addTeam() {
    let steaua: Team =
      new Team('Steaua', 'psg-logo.png', 'Vlad Tepes', 1602, 'Ghencea', 6, 'Roumanie');

    // ajout de l'objet steaua au tableau this.teams
    this.teams.push(steaua);
    //this.teams.splice(0, 1);
  }

  filterTeam() {
    //console.log(this.countrySelected);

    if (this.countrySelected == '0') {
      // l'utilisateur n'a pas choisi de pays => afficher toutes les équipes
      this.teamsFiltered = this.teams;
    } else {
      this.teamsFiltered =
        this.teams.filter((team: Team) => team.country == this.countrySelected);
    }

  }
}













/* Tanguy Style */
