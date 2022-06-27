// var index = 1
// function searchList(numbers, targetNumber) {
//   while (index > numbers.length) {
//     if ((numbers[index] = targetNumber)) {
//       return index
//     }
//     index++
//   }
//   return -1
// }
// searchList([3, 37, 45, 57, 93, 120], 45)

// console.log(searchList)

// function searchList(numbers, targetNumber) {
//   for (var index = 0; index < numbers.length; i++) {
//     if (numbers[index] === targetNumber) {
//       return index
//     }
//   }
//   return -1
// }

// var startMS = millis()

// searchList([3, 37, 45, 57, 93, 120], 45)

// var endMS = millis()
// println(endMS - startMS)

var searchList = function (numbers, targetNumber) {
  for (var index = 0; index < numbers.length; index++) {
    if (numbers[index] === targetNumber) {
      return index
    }
  }
  return -1
}

var startMS = millis()

searchList([3, 37, 45, 57, 93, 120], 45)

var endMS = millis()
println(endMS - startMS)
