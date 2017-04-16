//TODO: link data files
const standardFaces = {
  // main starting face
  front: {
    title: "STANDARD, data: MAIN",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  right: {
    title: "STANDARD, data: PROJECTS",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  left: {
    title: "STANDARD, data: BIO",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  top: {
    title: "STANDARD, data: CONTACT",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  bottom: {
    title: "STANDARD, data: BLOG",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  back: {
    title: "STANDARD, data: PLACEHOLDER",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  }
}

const projectFaces = {
  front: {
    title: "PROJECT, data: PROJECT1",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  right: {
    title: "PROJECT, data: PROJECT2",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  left: {
    title: "PROJECT, data: PROJECT3",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  top: {
    title: "PROJECT, data: PROJECT4",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  bottom: {
    title: "PROJECT, data: PROJECT5",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  },
  back: {
    title: "PROJECT, data: PROJECT6",
    shortDescription: "This is a short description",
    longDescription: "This is a long description. This is a long description",
  }
}

export const idxToFace = {
  0: 'front',
  1: 'right',
  2: 'left',
  3: 'top',
  4: 'bottom',
  5: 'back'
}

export function getFaceDataByFaceName(cubeType, cubeFace) {
  // takes a cube name (i.e. standard/project) and face (i.e. top/left/right) and returns data as object
  switch (cubeType) {
    case "standard":
      return standardFaces[cubeFace]
    case "project":
      return projectFaces[cubeFace]
    default:
      return standardFaces[cubeFace]
  }
}

export function getFaceDataBySideId(cubeType, sideId) {
  getFaceDataByFaceName(cubeType, idxToFace(sideId))
}
