import coloursEnum from '../enums/consoleColoursEnum';

export function linebreak(): void {
  console.log(coloursEnum.FG_YELLOW, '\n--------------------------------------------\n');
}
