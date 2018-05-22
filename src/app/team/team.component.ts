import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Team } from '../../model/Team';
import { TeamService } from '../team.service';
import 'rxjs/add/operator/map';

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

      // récupération du paramètre url
      // this.activatedRoute.params
      //   .map(item => {
      //     let msg = 'Forza';
      //     return msg + item.name.toUpperCase() + '!';
      //   })
      //   .subscribe(item => console.log(item));

      this.activatedRoute.params
        .subscribe(item => {
          this.team = this.teamService.getTeamByName(item.name);
          this.teamService.getPlayersByTeam(item.name)
            .subscribe(res => {
              this.players = res;
            });
        });

    }
  }
}



/**/
