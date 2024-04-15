import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mainmeny',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mainmeny.component.html',
  styleUrl: './mainmeny.component.scss'
})
export class MainmenyComponent {
  menu: HTMLDivElement;
  constructor (){
    console.log("works");
    // funkar inte för (jag tror) DOM har inte laddat in när constructorn körs, men måste ändå ge menu något värde
    this.menu = document.getElementById('mobile_menu') as HTMLDivElement;
  }

  openMenu():void{
    this.menu = document.getElementById('mobile_menu') as HTMLDivElement;
    this.menu.style.visibility = "visible";
  }
  closeMenu():void{
    this.menu = document.getElementById('mobile_menu') as HTMLDivElement;
    this.menu.style.visibility = "hidden";
  }
}
