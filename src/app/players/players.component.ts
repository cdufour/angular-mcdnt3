import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players = [];
  playersFiltered = [];

  teams = [];
  positions = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(res => {
      this.players = res;
      this.playersFiltered = res;

      this.players.forEach(player => {
        if (this.teams.indexOf(player.current_team) == -1) {
          // équipe non trouvée dans le tableau this.teams
          this.teams.push(player.current_team);
        }
        if (this.positions.indexOf(player.position) == -1) {
          this.positions.push(player.position);
        }
      });

    });
  }

  filterPlayers(val: string, key: string) {
    if (val != '0') {
      this.playersFiltered =
        this.players.filter(player => player[key] == val);
    } else {
      this.playersFiltered = this.players;
    }
  }

}
