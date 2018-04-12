import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  private colors: string[] = ['Rosso', 'Verde', 'Azzurro', 'Bianco', 'Nero'];

  constructor() { }

  public getColors() {
    return this.colors;
  }

}
