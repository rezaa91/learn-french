import VerbInterface from '../interfaces/VerbInterface';

const verbs: Array<VerbInterface> = [
  {
    name: 'Avoir',
    english: 'to have',
    example: 'j\'ai un chien (I have a dog)',
    variations: {
      je: 'ai',
      tu: 'as',
      il: 'a',
      elle: 'a',
      nous: 'avons',
      vous: 'avez',
      ils: 'ont',
      elles: 'ont'
    }
  },

  {
    name: 'Etre',
    english: 'to be',
    example: 'je suis anglais (I am English)',
    variations: {
      je: 'suis',
      tu: 'es',
      il: 'est',
      elle: 'est',
      nous: 'sommes',
      vous: 'etes',
      ils: 'sont',
      elles: 'sont'
    }
  },

  {
    name: 'Aimer',
    english: 'to like',
    example: 'J\'aime jouer au foot (I like to play football)',
    variations: {
      je: 'aime',
      tu: 'aimes',
      il: 'aime',
      elle: 'aime',
      nous: 'aimons',
      vous: 'aimez',
      ils: 'aiment',
      elles: 'aiment'
    }
  },

  {
    name: 'Manger',
    english: 'to eat',
    example: 'je mange beaucoup (I eat a lot)',
    variations: {
      je: 'mange',
      tu: 'manges',
      il: 'mange',
      elle: 'mange',
      nous: 'mangeons',
      vous: 'mangez',
      ils: 'mangent',
      elles: 'mangent'
    }
  },

  {
    name: 'Boire',
    english: 'to drink',
    example: 'je bois de l\'eau (I drink water)',
    variations: {
      je: 'bois',
      tu: 'bois',
      il: 'boit',
      elle: 'boit',
      nous: 'buvons',
      vous: 'buvez',
      ils: 'boivent',
      elles: 'boivent'
    }
  },

  {
    name: 'Penser',
    english: 'to think',
    example: 'ils pensent trop (they think too much)',
    variations: {
      je: 'pense',
      tu: 'penses',
      il: 'pense',
      elle: 'pense',
      nous: 'pensons',
      vous: 'pensez',
      ils: 'pensent',
      elles: 'pensent'
    }
  },

  {
    name: 'Parler',
    english: 'to speak',
    example: 'est-ce que tu parles francais? (do you speak French?)',
    variations: {
      je: 'parle',
      tu: 'parles',
      il: 'parle',
      elle: 'parle',
      nous: 'parlons',
      vous: 'parlez',
      ils: 'parlent',
      elles: 'parlent'
    }
  },

  {
    name: 'Aller',
    english: 'to go',
    example: 'nous allons au parc (we are going to the park)',
    variations: {
      je: 'vais',
      tu: 'vas',
      il: 'va',
      elle: 'va',
      nous: 'allons',
      vous: 'allez',
      ils: 'vont',
      elles: 'vont'
    }
  },

  {
    name: 'Faire',
    english: 'to do / to have done',
    example: 'je fais une sieste (I\'m having a nap)',
    variations: {
      je: 'fais',
      tu: 'fais',
      il: 'fait',
      elle: 'fait',
      nous: 'faisons',
      vous: 'faites',
      ils: 'font',
      elles: 'font'
    }
  },

  {
    name: 'Jouer',
    english: 'to play',
    example: 'ils jouent au foot (they are playing football)',
    variations: {
      je: 'joue',
      tu: 'joues',
      il: 'joue',
      elle: 'joue',
      nous: 'jouons',
      vous: 'jouez',
      ils: 'jouent',
      elles: 'jouent'
    }
  },

  {
    name: 'Pouvoir',
    english: 'to be able to / can',
    example: 'tu peux le faire (you can do it)',
    variations: {
      je: 'peux',
      tu: 'peux',
      il: 'peut',
      elle: 'peut',
      nous: 'pouvons',
      vous: 'pouvez',
      ils: 'peuvent',
      elles: 'peuvent'
    }
  },

  {
    name: 'Vouloir',
    english: 'to want',
    example: 'je veux des bonbons (I want candy)',
    variations: {
      je: 'veux',
      tu: 'veux',
      il: 'veut',
      elle: 'veut',
      nous: 'voulons',
      vous: 'voulez',
      ils: 'veulent',
      elles: 'veulent'
    }
  },

  {
    name: 'Prendre',
    english: 'to take',
    example: 'il prend la voiture (he takes the car)',
    variations: {
      je: 'prends',
      tu: 'prends',
      il: 'prend',
      elle: 'prend',
      nous: 'prenons',
      vous: 'prenez',
      ils: 'prenent',
      elles: 'prenent'
    }
  },

  {
    name: 'Mettre',
    english: 'to put',
    example: 'nous mettons les decorations (we put up the decorations)',
    variations: {
      je: 'mets',
      tu: 'mets',
      il: 'met',
      elle: 'met',
      nous: 'mettons',
      vous: 'mettez',
      ils: 'mettent',
      elles: 'mettent'
    }
  },

  {
    name: 'Voir',
    english: 'to see',
    example: 'je vous vois (I see you)',
    variations: {
      je: 'vois',
      tu: 'vois',
      il: 'voit',
      elle: 'voit',
      nous: 'voyons',
      vous: 'voyez',
      ils: 'voient',
      elles: 'voient'
    }
  },

  {
    name: 'Dire',
    english: 'to say',
    example: 'que dis-tu (what do you say?)',
    variations: {
      je: 'dis',
      tu: 'dis',
      il: 'dit',
      elle: 'dit',
      nous: 'disons',
      vous: 'dites',
      ils: 'disent',
      elles: 'disent'
    }
  },

  {
    name: 'Travailler',
    english: 'to work',
    example: 'je travaille comme programmeur (I work as a programmer)',
    variations: {
      je: 'travaille',
      tu: 'travailles',
      il: 'travaille',
      elle: 'travaille',
      nous: 'travaillons',
      vous: 'travaillez',
      ils: 'travaillent',
      elles: 'travaillent'
    }
  },

  {
    name: 'Donner',
    english: 'to give',
    example: 'donne moi de l\'argent (give me money)',
    variations: {
      je: 'donne',
      tu: 'donnes',
      il: 'donne',
      elle: 'donne',
      nous: 'donnons',
      vous: 'donnez',
      ils: 'donnent',
      elles: 'donnent'
    }
  },

  {
    name: 'Acheter',
    english: 'to buy',
    example: 'achete-moi de la biere (buy me some beer)',
    variations: {
      je: 'achete',
      tu: 'achetes',
      il: 'achete',
      elle: 'achete',
      nous: 'achetons',
      vous: 'achetez',
      ils: 'achetent',
      elles: 'achetent'
    }
  },

  {
    name: 'Comprendre',
    english: 'to understand',
    example: 'est-que vous comprenez? (do you understand?)',
    variations: {
      je: 'comprends',
      tu: 'comprends',
      il: 'comprend',
      elle: 'comprend',
      nous: 'comprenons',
      vous: 'comprenez',
      ils: 'comprennent',
      elles: 'comprennent'
    }
  },

  {
    name: 'Ecouter',
    english: 'to listen',
    example: 'ecoute moi (listen to me)',
    variations: {
      je: 'ecoute',
      tu: 'ecoutes',
      il: 'ecoute',
      elle: 'ecoute',
      nous: 'ecoutons',
      vous: 'ecoutez',
      ils: 'ecoutent',
      elles: 'ecoutent'
    }
  },

  {
    name: 'Regarder',
    english: 'to watch',
    example: 'nous regardons la television (we are watching television)',
    variations: {
      je: 'regarde',
      tu: 'regardes',
      il: 'regarde',
      elle: 'regarde',
      nous: 'regardons',
      vous: 'regardez',
      ils: 'regardent',
      elles: 'regardent'
    }
  }
];

export default verbs;
