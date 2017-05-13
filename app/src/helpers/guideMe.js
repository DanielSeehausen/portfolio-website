// quick and dirty - adds event listeners to the cube movers. When triggered, they remove themselves and
function activateGuide(elementId) {
  $(document).one("click", () => {
    $('#guide-me').fadeTo(1, 0)
  })
}

export default activateGuide
