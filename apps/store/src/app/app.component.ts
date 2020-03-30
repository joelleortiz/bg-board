import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';

import { formatRating } from '@bg-hoard/store/util-formatters';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames().map(game => {
    return { ...game, rating: formatRating(game.rating) };
  });
}
