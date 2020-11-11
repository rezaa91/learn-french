import coloursEnum from '../enums/consoleColoursEnum';
import {verbsSortedAlphabetically} from '../repositories/verbRepository';
import state from '../state/displayState';
import {linebreak} from '../utilities/linebreak';
import ModuleInterface from '../interfaces/ModuleInterface';
import MainMenuModule from './MainMenuModule';

export default class ListVerbsModule implements ModuleInterface {
  public display(): void {
    linebreak();

    verbsSortedAlphabetically().forEach(verb => {
      console.log(coloursEnum.FG_RED, `\t\t\t\t${verb?.name} (${verb?.english})`);
      console.log(coloursEnum.FG_WHITE, `\t\tpar example: ${verb?.example}\n`);

      for (const [pronoun, use] of Object.entries(verb.variations)) {
        console.log(coloursEnum.FG_CYAN, `\t${pronoun} ${use}`);
      }

      linebreak();
    });

    state.setState(new MainMenuModule);
  }

  public onExit(): void {
    linebreak();
  }
}


