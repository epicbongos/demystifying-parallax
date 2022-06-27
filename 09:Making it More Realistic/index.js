// html setup
var itemsHTMLCollection = document.getElementsByClassName('parallax-item')
var itemsArray = Array.from(itemsHTMLCollection)

console.log('itemsArray', itemsArray)

// input Setup
var input = {
  mouseX: {
    start: 0,
    end: window.innerWidth,
    current: 0,
  },
  mouseY: {
    start: 0,
    end: window.innerHeight,
    current: 0,
  },
}

input.mouseX.range = input.mouseX.end - input.mouseX.start
input.mouseY.range = input.mouseY.end - input.mouseY.start

// output Setup
var output = {
  x: {
    start: -150,
    end: 150,
    current: 0,
  },
  y: {
    start: -150,
    end: 150,
    current: 0,
  },
  zIndex: {
    range: 10000,
  },
}

output.x.range = output.x.end - output.x.start
output.y.range = output.y.end - output.y.start

var updateInputs = function () {
  // mouse x input
  input.mouseX.current = event.clientX
  input.mouseX.fraction =
    (input.mouseX.current - input.mouseX.start) / input.mouseX.range

  // mouse y input
  input.mouseY.current = event.clientY
  input.mouseY.fraction =
    (input.mouseY.current - input.mouseY.start) / input.mouseY.range
}

var handleMouseMove = function (event) {
  updateInputs()
  // output x
  output.x.current = output.x.end - input.mouseX.fraction * output.x.range

  // output y
  output.y.current = output.y.end - input.mouseY.fraction * output.y.range

  // apply output to html
  itemsArray.forEach(function (item, i) {
    var depth = parseFloat(item.dataset.depth, 10) // parse string into number which is float then be decimal(10)
    var itemOutput = {
      x: output.x.current - output.x.current * depth,
      y: output.y.current - output.y.current * depth,
      zIndex: output.zIndex.range - output.zIndex.range * depth,
    }
    console.log(i, 'depth', depth)
    item.style.zIndex = itemOutput.zIndex
    item.style.transform =
      'translate(' + itemOutput.x + 'px, ' + itemOutput.y + 'px)'
  })
}

var handleResize = function (event) {
  input.mouseX.end = window.innerWidth
  input.mouseX.range = input.mouseX.end - input.mouseX.start
  input.mouseY.end = window.innerHeight
  input.mouseY.range = input.mouseY.end - input.mouseY.start
}

window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleResize)
