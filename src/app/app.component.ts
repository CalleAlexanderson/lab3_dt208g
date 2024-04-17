import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenyComponent } from './mainmeny/mainmeny.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainmenyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-app';
}
