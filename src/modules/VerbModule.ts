import {rl} from '../utilities/readline';
import verbs from '../data/verbs';
import state from '../state/displayState';
import {linebreak} from '../utilities/linebreak';
import {frenchPronouns, englishPronouns} from '../data/pronouns';
import coloursEnum from '../enums/consoleColoursEnum';
import ModuleInterface from '../interfaces/ModuleInterface';
import MainMenuModule from './MainMenuModule';

export default class VerbModule implements ModuleInterface {
  private score: number;

  constructor(score = 0) {
    this.score = score;
  }

  private getQAndA(): Array<string> {
    const randomVerb: number = Math.floor(Math.random() * verbs.length);
    const randomPronoun: number = Math.floor(Math.random() * frenchPronouns.length);

    return [
      `PRONOUN: ${englishPronouns[randomPronoun]}\tVERB: ${verbs[randomVerb]?.english}\n`,
      verbs[randomVerb]?.variations[frenchPronouns[randomPronoun]],
      verbs[randomVerb]?.example
    ]
  }

  public display(): void {
    const [question, answer, example] = this.getQAndA();

    linebreak();
    rl.question(question, (response) => {
      if (response === 'exit') {
        return state.setState(new MainMenuModule);
      }

      if (response.toLowerCase().trim() === answer.toLowerCase()) {
        this.score++;
        console.log(coloursEnum.FG_GREEN, `\t\t\t\t\t\tCorrect. Current score: ${this.score}`);
      } else {
        console.log(coloursEnum.FG_RED, `\t\t\t\t\t\tIncorrect. The answer is: ${answer}`);
      }

      console.log(`\t\t\t\t\t\tPar example: "${example}"`);

      return this.display();
    })
  }

  public onExit(): void {
    console.log(`\t\t\t\t\t\tYOU SCORED: ${this.score}`);
    linebreak();
  }
}
