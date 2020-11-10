import state from './state/displayState';
import MainMenuModule from './modules/MainMenuModule';

function start(): void {
  state.setState(new MainMenuModule);
}

start();
