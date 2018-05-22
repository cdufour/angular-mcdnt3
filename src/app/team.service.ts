import { Injectable } from '@angular/core';
import { Team } from '../model/Team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:5000';

@Injectable()
export class TeamService {
  private colors: string[] = ['Rosso', 'Verde', 'Azzurro', 'Bianco', 'Nero'];
  private teams: Team[] = [
    new Team('Juventus', 'juve-logo.png', 'Allegri', 1897, 'Juventus Stadium', 5, 'Italie'),
    new Team('PSG', 'psg-logo.png', 'Emery', 1970, 'Parc des Princes', 3, 'France'),
    new Team('Strasbourg', 'strasbourg-logo.png', 'Laurey', 1906, 'La Meinau', 1, 'France'),
  ];

  constructor(private http: HttpClient) { }

  public getColors() {
    return this.colors;
  }

  // public getTeams() {
  //   return this.teams;
  // }

  public getTeams(): Observable<any> {
    // le service renvoie un Observable au composant demandeur
    return this.http.get(SERVER_URL + '/teams');
  }

  public getTeamByName(name: string): Team {
    let team: Team[] = [];
    team = this.teams.filter((t) => t.name == name);
    return team[0]; // renvoie l'objet de type Team placé à l'indice 0
  }

  public addTeam(team: Team) {
    this.teams.push(team);
  }

  public getPlayersByTeam(name: string): Observable<any> {
    return this.http.get(SERVER_URL + '/teams/' + name + '/players');
  }

}







/**/
