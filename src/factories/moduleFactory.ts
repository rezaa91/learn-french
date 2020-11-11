import ModuleInterface from '../interfaces/ModuleInterface';
import VerbModule from '../modules/VerbModule';
import ListVerbsModule from '../modules/ListVerbsModule';
import moduleEnum from '../enums/moduleEnum';

export function create(answer: number): ModuleInterface {
  switch (answer) {
    case moduleEnum.VERBS:
      return new VerbModule;
    case moduleEnum.LIST_VERBS:
      return new ListVerbsModule;
    default:
      return null;
  }
}
