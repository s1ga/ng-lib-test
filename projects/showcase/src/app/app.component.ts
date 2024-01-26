import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibComponent } from '../../../siga-test-lib/src/lib/lib.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Lib showcase';
}
