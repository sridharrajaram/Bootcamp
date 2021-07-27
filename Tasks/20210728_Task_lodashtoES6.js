//chunk array with size as input

let array = ["a", "b", "c", "d", "e"];
let size = 2;
let output = chunkArray(array, size);
console.log(output);

function chunkArray(arr, size) {
    let arrlen = arr.length;
    var tempArr = [];

    for (let i = 0; i < arrlen; i += size) {
        newArr = arr.slice(i, i + size);
        // Do something if you want with the group
        tempArr.push(newArr);
    }

    return tempArr;
}

//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
//compact lodash

let array1 = [0, 1, false, 2, "", 3];
console.log(remFalse(array1));

function remFalse(arr) {
    let temArr = [];
    for (i = 0; i < arr.length; i++) {
        let out = arr[i] ? true : false;
        if (out === true) {
            temArr.push(arr[i]);
        }
    }
    return temArr;
}


//_.concat(array, [values]) lodash Creates a new array concatenating array with any additional arrays and/or values.

let array2 = [1];
let other = [...array2, 2, 3, 4, 5, [6]];
console.log(other);


//_.drop lodash Creates a slice of array with n elements dropped from the beginning

let array4 = [1,2,3,4,5,6,7,8,9];
let numtoslice = 5;

console.log(array4.slice(numtoslice)); // slicer index start from 1 not 0


//_.dropRight(array, [n=1]) Creates a slice of array with n elements dropped from the end.

let array5 = [1,2,3,4,5,6,7];
let numtosliceright = 3;
console.log(array5.slice(0,-numtosliceright)); //neg index starts from right;


//_.fill(array, value, [start=0], [end=array.length]) 
//lodash Fills elements of array with value from start up to, but not including, end.

let array6 = [1,2,3,4,5,6,7,8];
let valtofill = "b";
let outarr = array6.fill(valtofill,1,5);
console.log(outarr);

//_.findIndex(array, [predicate=_.identity], [fromIndex=0])
/* lodash This method is like _.find except that it returns the index of the first element 
predicate returns truthy for instead of the element itself. */

let array7 =[
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

let indexval = array7.findIndex((a)=> a.user === "pebbles");
console.log(indexval);


/* _.intersection([arrays]) lodash Creates an array of unique values that are included in all given arrays
using SameValueZero for equality comparisons. 
The order and references of result values are determined by the first array. */

let array8 = [2,1,3];
let matchval = [2,3,4];

console.log(intersection(array8, matchval));

function intersection(arr, excVal) {
    let tempArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < excVal.length; j++) {
            if (arr[i] === excVal[j]) {
                tempArray.push(arr[i]);
            }
        }
    }
    return tempArray;
}

//_.nth(array, [n=0]) lodash Gets the element at index n of array. 
// If n is negative, the nth element from the end is returned.

let array9 =[1,2,3,"a","b","c","d"];
let index = 5;
console.log(array9[index-1]);


/* _.remove(array, [predicate=_.identity]) lodash Removes all elements from array that 
predicate returns truthy for and returns an array of the removed elements. 
The predicate is invoked with three arguments: (value, index, array). */

const array10 =[1,2,3,4,5,6,7,8,9,10];

const newOutArr = array10.filter((ele)=> ele%2 !== 0);
console.log(newOutArr);