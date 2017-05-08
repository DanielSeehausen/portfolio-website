const destinationMapper = {
  0: {
    rechts: 1,
    links: 2,
    oben: 3,
    unten: 4,
    gegenUeber: 5
  },
  1: {
    links: 0,
    rechts: 5,
    oben: 3,
    unten: 4,
    gegenUeber: 2,
  },
  2: {
    links: 5,
    rechts: 0,
    oben: 3,
    unten: 4,
    gegenUeber: 1,
  },
  3: {
    links: 2,
    rechts: 1,
    oben: 5,
    unten: 0,
    gegenUeber: 4,
  },
  4: {
    links: 2,
    rechts: 1,
    oben: 0,
    unten: 5,
    gegenUeber: 3,
  },
  5: {
    links: 1,
    rechts: 2,
    oben: 3,
    unten: 4,
    gegenUeber: 0,
  }
}

export default destinationMapper
