import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '@bg-hoard/util-interface';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}

  title = 'Board Game Hoard';
  games = this.httpClient.get<Game[]>('/api/games');
}
