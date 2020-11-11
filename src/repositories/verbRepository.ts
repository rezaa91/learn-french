import verbs from '../data/verbs';
import VerbInterface from '../interfaces/VerbInterface';

export function verbsSortedAlphabetically(): Array<VerbInterface> {
  return verbs.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    return 1;
  });
}
