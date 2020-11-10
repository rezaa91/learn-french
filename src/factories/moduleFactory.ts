import ModuleInterface from '../interfaces/ModuleInterface';
import VerbModule from '../modules/VerbModule';
import moduleEnum from '../enums/moduleEnum';

export function create(answer: number): ModuleInterface {
  switch (answer) {
    case moduleEnum.VERBS:
      return new VerbModule;
    default:
      return null;
  }
}
