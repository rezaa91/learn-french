import {rl} from '../utilities/readline';
import state from '../state/displayState';
import {create} from '../factories/moduleFactory';
import {displayMainMenu} from '../menus/mainMenu';
import ModuleInterface from '../interfaces/ModuleInterface';

export default class MainMenuModule implements ModuleInterface {
  public display(): void {
    console.log('\t\t---- LEARN FRENCH ----');
    rl.question(displayMainMenu(), (response) => {
      const module: ModuleInterface = create(parseInt(response));

      if (!module) {
        console.log('Invalid option. Please try again.');

        return this.display();
      }

      state.setState(module);
    });
  }

  public onExit(): void {
    console.log('\t\t\t\t\t\ttype "exit" to go back to menu');
  }
}
