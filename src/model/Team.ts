export class Team {
  private logo_folder: string = '/assets/img/logos/';

  name: string;
  logo: string;
  coach: string;
  founded: number;
  stadium: string;

  constructor(
    name: string,
    logo: string,
    coach: string,
    founded: number,
    stadium: string) {
    this.name = name;
    this.logo = logo;
    this.coach = coach;
    this.founded = founded;
    this.stadium = stadium;
  }

  getLogoUrl() {
    return this.logo_folder + this.logo;
  }
}
