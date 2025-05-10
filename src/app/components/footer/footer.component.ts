import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule here

@Component({
  selector: 'app-footer',
  standalone: true,  // <-- Ensure this is true if it's a standalone component
  imports: [RouterModule], // <-- Import RouterModule
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
}
