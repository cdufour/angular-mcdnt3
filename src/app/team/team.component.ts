import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Team } from '../../model/Team';
import { TeamService } from '../team.service';
import { mergeMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input('team') team: Team;
  players = [];

  constructor(
    private teamService: TeamService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    if (!this.team) {
      // team n'est pas défini, on demande au service de nous donner l'info
      // manquante liée au paramètre url (nom de l'équipe)

      let params = this.activatedRoute.params;
      params.pipe(
        tap(val => this.team = this.teamService.getTeamByName(val.name)),
        mergeMap(val => this.teamService.getPlayersByTeam(val.name))
      )
      .subscribe(val => this.players = val);

    }
  }
}
