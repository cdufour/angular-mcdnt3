import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../datasources';
import { Team } from '../../model/Team';

@Component({
  selector: 'add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  countries: string[];
  team: Team = new Team('', '', '', 0, '', 0, '');

  constructor() { }

  ngOnInit() {
    this.countries = COUNTRIES;
  }

  onSubmit() {
    console.log(this.team);
    // utiliser le teamService pour ajouter la team à la source de données
  }

}
