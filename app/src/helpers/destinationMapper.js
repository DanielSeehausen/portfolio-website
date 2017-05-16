const destinationMapper = {
  0: {
    rechts: 1,
    links: 2,
    oben: 3,
    unten: 4,
    gegenUeber1: '5a',
    gegenUeber2: '5b',
    gegenUeber3: '5c',
    gegenUeber4: '5d'
  },
  1: {
    links: 0,
    rechts: 5,
    oben: 3,
    unten: 4,
    gegenUeber1: 2,
    gegenUeber2: 2,
    gegenUeber3: 2,
    gegenUeber4: 2
  },
  2: {
    links: 5,
    rechts: 0,
    oben: 3,
    unten: 4,
    gegenUeber1: 1,
    gegenUeber2: 1,
    gegenUeber3: 1,
    gegenUeber4: 1
  },
  3: {
    links: 2,
    rechts: 1,
    oben: 5,
    unten: 0,
    gegenUeber1: 4,
    gegenUeber2: 4,
    gegenUeber3: 4,
    gegenUeber4: 4
  },
  4: {
    links: 2,
    rechts: 1,
    oben: 0,
    unten: 5,
    gegenUeber1: 3,
    gegenUeber2: 3,
    gegenUeber3: 3,
    gegenUeber4: 3
  },
  5: {
    links: 1,
    rechts: 2,
    oben: 3,
    unten: 4,
    gegenUeber1: 0,
    gegenUeber2: 0,
    gegenUeber3: 0,
    gegenUeber4: 0
  }
}

export default destinationMapper
