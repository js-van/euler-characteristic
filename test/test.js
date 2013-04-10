var euler = require("../euler")
require("tap").test("euler character", function(t) {

  t.equals(euler([[0,1], [1,2], [2,0]]), 0)
  t.equals(euler([[0,1], [1,2], [2,3]]), 1)
  t.equals(euler([[0,1,2]]), 1)
  t.equals(euler([
        [0,1,2],
        [0,1,3],
        [0,2,3],
        [1,2,3]
    ]), 2)
    
  t.end()
})