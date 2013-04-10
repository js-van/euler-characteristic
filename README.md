euler-characteristic
====================
Computes the [Euler characteristic](http://en.wikipedia.org/wiki/Euler_characteristic) of a [simplicial complex](https://github.com/mikolalysenko/simplicial-complex), ignoring duplicate cells.

## Install

    npm install euler-characteristic
    
## Example

```javascript
var euler = require("euler-characteristic")

//Compute Euler characteristic of circle
console.log(euler([[0,1], [1,2], [2,0]])) //Prints: 0

//Compute Euler characteristic of Stanford bunny
console.log(euler(require("bunny")))      //Prints: 2
                                          //(the bunny is homotopic to a sphere after all)
```

### `require("euler-characteristic")(cells)`
Computes the Euler characteristic of a simplicial complex, ignoring any duplicate cells.

* `cells` is a simplicial complex

**Returns** An integer representing the Euler characteristic of the cell complex

# Credits
(c) 2013 Mikola Lysenko. MIT License
