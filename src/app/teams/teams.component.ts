import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';
import { COUNTRIES } from '../datasources';
import { TeamService } from '../team.service';

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

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.countries = COUNTRIES;
    this.team_display = 'a2';
    this.teams = this.teamService.getTeams(); // initialisation de teams
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
