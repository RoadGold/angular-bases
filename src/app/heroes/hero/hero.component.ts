import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app--heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public ege: number = 45;
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }
  getHeroDescription(): string{
    return `${ this.name } - ${ this.ege } `;
  }

  chaganHero():void {
    this.name = 'SpiderMan';
  }
  changeAge():void {
    this.ege = 25;
  }
  resetForn(): void{
     this.name = 'IronMan'
     this.ege = 45;
  }
}
