import { Component } from '@angular/core';

import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}

  title = 'Board Game Hoard';
  games = this.httpClient.get<object[]>('/api/games').pipe(
    map(games =>
      games.map(game => {
        return { ...game, rating: formatRating((game as any).rating) };
      })
    )
  );
}
