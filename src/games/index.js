import * as games from '../game_module';

export default () => {
  const userName = games.askName();
  games.greeting(userName);
};
