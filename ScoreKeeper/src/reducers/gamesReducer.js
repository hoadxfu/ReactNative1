import { games } from '../database.json';
import { LIST_GAME_REQUEST } from '../actions/types';

export default (gamesReducer = (state = games, action) =>
  action.type == LIST_GAME_REQUEST ? games : state);
