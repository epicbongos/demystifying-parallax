- make a find correct ƒloor with array index objects

- find closest station while driving with array objects,
  PROCEDURE findClosestStation(address, stations) {
  minDistance ← calcDrivingDistance(address, stations[1])
  closestStation ← stations[1]
  ind ← 2
  REPEAT UNTIL (ind > LENGTH(stations)) {
  drivingDistance ← calcDrivingDistance(address, stations[ind])
  IF (drivingDistance < minDistance) {
  minDistance ← drivingDistance
  closestStation ← stations[ind]
  }
  ind ← ind + 1
  }
  RETURN closestStation
  }


- make a searchList on array
PROCEDURE searchList(numbers, targetNumber) {
  minIndex ← 1
  maxIndex ← LENGTH(numbers)
  REPEAT UNTIL (minIndex > maxIndex) {
    middleIndex ← FLOOR((minIndex+maxIndex)/2)
    IF (targetNumber = numbers[middleIndex]) {
      RETURN middleIndex
    } ELSE {
       IF (targetNumber > numbers[middleIndex]) {
         minIndex ← middleIndex + 1
       } ELSE {
         maxIndex ← middleIndex - 1
       }
     }
  }
  RETURN -1
}