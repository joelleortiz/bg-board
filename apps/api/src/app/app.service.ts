import { Injectable } from '@nestjs/common';
import { games } from '../assets/games';

import { Game } from '@bg-hoard/util-interface';

@Injectable()
export class AppService {
  getAllGames = (): Game[] => games;
  getGame = (id: string): Game => games.find(game => game.id === id);
}
