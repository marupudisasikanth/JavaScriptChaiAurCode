const myArr = [0, 1, 2, 3, 4, 5];
const newArr = new Array('app', 'web', 'browser');
const {0 : a, 1 : b, ...rem} = myArr
// console.log(a);
// console.log(b);
// console.log(rem);

// console.log(myArr==secArr)

// Array Methods

console.log(myArr.push(90));
 console.log(myArr.unshift(20));
 console.log(myArr.shift());
 console.log(myArr.pop());
console.log(myArr)

const str = myArr.join('-')
console.log(str);


console.log(myArr.slice(1,3))
console.log(myArr.splice(1,3,9,10))
console.log(myArr);

// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete,values to insert) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

// actually there is a mistake in splice method....splice not includes last index value but it takes number of values given from starting index.....for ex: arr = [2,3,4,5,6,7,8,9] and then console.log(arr.splice(3,4)); gives 5,6,7,8.