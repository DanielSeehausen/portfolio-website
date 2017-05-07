// import { graphics } from "./graphics.js"
//
// var x = null
//
// function getKFStyleSheet() {
//   for (let idx = 0; idx < document.styleSheets.length; idx++) {
//     if (document.styleSheets[idx].title === "keyframes")
//       return document.styleSheets[idx].cssRules
//   }
// }
//
// export const keyframesController = {
//   assignRules: () => {
//     console.log(this)
//     const kFRules = getKFStyleSheet()
//     for (let idx = 0; idx < kFRules.length; idx++) {
//       if (kFRules[idx].name === "oscillate") {
//         // setOscillateRule = kFRules[idx]
//       } else if (kFRules[idx].name === "stop-oscillation") {
//         // setStopOscillateRule = kFRules[idx]
//       }
//     }
//   },
//
//   oscillate: (element) => {
//     let x = graphics.getCurrentRotation(element)
//     debugger
//   },
//
//   stopOscillation: (currPos) => {
//
//   },
//
// }
