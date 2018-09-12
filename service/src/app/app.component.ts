import {Component} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})// Мы делаем service provider в корневом компоненте, и он распространяется один на дочерние,
// если сделаем в двух дочерних, то будет 2 сервиса разных
export class AppComponent {

  title = 'title';

};