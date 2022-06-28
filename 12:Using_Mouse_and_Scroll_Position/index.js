// html setup
var itemsHTMLCollection = document.getElementsByClassName('parallax-item')
var itemsArray = Array.from(itemsHTMLCollection)
var html = document.documentElement
// console.log("itemsArray", itemsArray);

// input Setup
var input = {
  scrollY: {
    start: 0,
    end: html.scrollHeight - window.innerheight,
    current: 0,
  },
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

// inputs range
input.scrollY.range = input.mouseY.end - input.mouseY.start
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
  scrollY: {
    start: 0,
    end: 500,
    current: 0,
  },
  zIndex: {
    range: 10000,
  },
  scale: {
    start: 1, // 1 = original size
    end: 0.3, // this can be changed to other value
  },
  blur: {
    startingDepth: 0.1,
    range: 40,
  },
}

// outputs range
output.scale.range = output.scale.end - output.scale.start
output.x.range = output.x.end - output.x.start
output.y.range = output.y.end - output.y.start
output.scrollY.range = output.scrollY.end - output.scrollY.start

var mouse = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
}

var updateInputs = function () {
  // mouse x input
  input.mouseX.current = mouse.x
  input.mouseX.fraction =
    (input.mouseX.current - input.mouseX.start) / input.mouseX.range

  // mouse y input
  input.mouseY.current = mouse.y
  input.mouseY.fraction =
    (input.mouseY.current - input.mouseY.start) / input.mouseY.range

  //scroll y input
  input.scrollY.current = html.scrollTop
  input.scrollY.fraction =
    (input.scrollY.current - input.scrollY.start) / input.scrollY.range
  // console.log("output.y.end", output.y.end);
  // console.log("output.y.range", output.y.range);
  // console.log("input.scrollY.fraction", input.scrollY.fraction);
  console.log('scroll', input.scrollY.current)
}

var updateOutputs = function () {
  // output x and y
  // output.x.current = output.x.end - input.mouseX.fraction * output.x.range
  // output.y.current = output.y.end - input.mouseY.fraction * output.y.range
  output.y.current = output.y.start + input.scrollY.fraction * output.y.range
}

var updateEachParallaxItem = function () {
  // apply output to html
  itemsArray.forEach(function (item, k) {
    var depth = parseFloat(item.dataset.depth, 10) // parse strings from itemsArray into number which is float then be decimal(10)
    var itemInput = {
      scrollY: {
        start: item.offsetParent.offsetTop,
        // the use of offset is preferable
        // offset used to get things to be exactly where you set them originaly
        // distance between offsetParent and top of the documents + windows.innerHeight
        end: item.offsetParent.offsetTop + window.innerHeight,
      },
    }
    itemInput.scrollY.range = itemInput.scrollY.end - itemInput.scrollY.start
    itemInput.scrollY.fraction =
      (input.scrollY.current - itemInput.scrollY.start) /
      itemInput.scrollY.range

    var itemOutputYCurrent =
      output.y.start + itemInput.scrollY.fraction * output.y.range

    var itemOutput = {
      x: output.x.current - output.x.current * depth,
      y: itemOutputYCurrent * depth, // deeper <- quicker
      // y: output.y.current - output.y.current * depth,
      zIndex: output.zIndex.range - output.zIndex.range * depth,
      scale: output.scale.start + output.scale.range * depth,
      blur: (depth - output.blur.startingDepth) * output.blur.range,
    }
    // console.log(k, "depth", depth);
    console.log('windowInnerHeight', window.innerHeight)
    console.log(k, 'itemInput scrollY fraction', itemInput.scrollY.fraction)
    item.style.filter = 'blur(' + itemOutput.blur + 'px)' // the item closer to us are not
    // item.style.filter = 'blur(5px)'
    item.style.zIndex = itemOutput.zIndex
    item.style.transform =
      // scale and translate are both transform property
      'scale(' +
      itemOutput.scale +
      ') translate(' +
      itemOutput.x +
      'px, ' +
      itemOutput.y +
      'px)'
  })
}

var handleMouseMove = function (event) {
  mouse.x = event.clientX
  mouse.y = event.clientY
  updateInputs()
  updateOutputs()
  updateEachParallaxItem()
}

var handleScroll = function () {
  updateInputs()
  updateOutputs()
  updateEachParallaxItem()
}

var handleResize = function () {
  input.mouseX.end = window.innerWidth
  input.mouseX.range = input.mouseX.end - input.mouseX.start

  input.mouseY.end = window.innerHeight
  input.mouseY.range = input.mouseY.end - input.mouseY.start

  input.scrollY.end = html.scrollHeight - window.innerHeight
  input.scrollY.range = input.scrollY.end - input.scrollY.start
}

// window.addEventListener('mousemove', handleMouseMove)
document.addEventListener('scroll', handleScroll)
window.addEventListener('resize', handleResize)

updateInputs()
updateOutputs()
updateEachParallaxItem()
