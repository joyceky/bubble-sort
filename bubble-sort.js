"use strict";

function swap(arr, i1, i2) {
  [[arr[i1]],[arr[i2]]] = [[arr[i2]],[arr[i1]]];
  return arr;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr.length-i; x++) {
       if (arr[x] > arr[x+1]) {
         swap(arr, x, x+1);
       }
    }
  }
  return arr;
}

let numArr = [66, 43, 44, 99, 203];
let numArr2 = [5, 4, 3, 2, 1]

console.log(bubbleSort(numArr));
console.log(bubbleSort(numArr2));
