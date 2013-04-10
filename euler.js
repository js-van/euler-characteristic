"use strict"

var sc = require("simplicial-complex")

function eulerCharacteristic(cells) {
  var xi = 0, i, d = sc.dimension(cells)
  for(i=0; i<=d; ++i) {
    var c = sc.unique(sc.skeleton(cells, i)).length
    xi += (i & 1) ? -c : c
  }
  return xi
}

module.exports = eulerCharacteristic