import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:5000';

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<any> {
    return this.http.get(SERVER_URL + '/players');
  }

}
