import {Component} from '@angular/core';
import {AuthService} from './userAuth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Pets 'R' us`;

  constructor(public authService: AuthService) {

  }
}
