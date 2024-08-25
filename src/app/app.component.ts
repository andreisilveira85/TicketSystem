import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EventComponent } from "./components/event/event.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, EventComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'SistemaVendaIngressos';
}
