import { Injectable } from '@nestjs/common';
import { games } from '../assets/games';

@Injectable()
export class AppService {
  getAllGames = () => games;
  getGame = (id: string) => games.find(game => game.id === id);
}
