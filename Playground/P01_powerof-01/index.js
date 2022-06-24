// 2^(n + 1) =
// 2 * 2^n > 2 * n^2 = n^2 + n^2 > n^2 + 2n + 1 = (n + 1)^2
var n = 10
var quest = 2
var startValue = Math.pow(quest, n + 1)
var i = 0

var case1 = Math.pow(quest, n)
var case2 = Math.pow(n, quest)

console.log('case2 : ' + case2)
console.log('case1 : ' + case1)

if (case1 === case2) {
  console.log('case1 and case2 are equal')
}

var case3 = Math.pow(n, quest) + Math.pow(n, quest)
var case4 = Math.pow(quest, n)
var case5 = Math.pow(n + 1, quest)

console.log('case3 : ' + case3)
console.log('case4 : ' + case4)
// console.log('case5 : ' + case5)

if (case3 > case4) {
  console.log('case3 is more greater than case4')
} else {
  console.log('case3 is less than case4')
}

// var case4 = Math.pow(2, n) + 1
// var case5 = (n+1 )
