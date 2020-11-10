import ModuleInterface from '../interfaces/ModuleInterface';

class DisplayState {
  private state: ModuleInterface;

  public setState(module: ModuleInterface) {
    if (this.state) {
      this.state.onExit();
    }

    this.state = module;
    this.state.display();
  }
}

export default new DisplayState;
