let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length - 1;
while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++;
    last--;
}
 document.write(x);
 //Tìm giá trị trong mảng
//  let value = prompt("Enter a number: ");
//  let numbers = [-3, 5, 1, 3, 2, 10];
//  for (let i = 0; i < numbers.length; i++) {
//     if (value == numbers[i]) {
//             alert("Value " + numbers[i] + "found at " + i);
//         }
//     }
//  Tìm giá trị lớn nhất 
// let numbers = [-3, 5, 1, 3, 2, 10];
// let max = numbers[0];
// let index = 0;
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//         index = i;
//     }
// }
// alert("max: " + max + " at position " + index);