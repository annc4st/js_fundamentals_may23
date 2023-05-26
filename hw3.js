/*1 Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]*/
const arr3 = [5, 3, 4, 5,6,7,3];

/*try 1 ****/
function compact1(arr) {

    let maxCount = 0;
    let maxFreq = [];

    for (let i = 0; i<arr.length; i++){
        let count = 0; // number of occurences
        for (let j = 0; j<arr.length; j++){
            if (arr[i] === arr[j]){
                count++;
            }
        }
            if (count >=2){
                maxFreq.push(arr[i]); //create arrray that shows occurences more than 1
            } 
        }
  
    return maxFreq;
    
}

/*try2 **/
function uniq(arr) {
    let seen = {};
    let new_uniq = [];
    let j = 0;
    for(let i = 0; i<arr.length; i++){
        let item = arr[i];
        if(seen[item] !== 1) {
            seen[item] = 1;
            new_uniq[j++] = item;
        }
    }
    return new_uniq;    
}
console.log(uniq(arr3));


function compact2(arr) {
    newArr = [new Set(arr)];
    return newArr;
}

console.log(compact2(arr3));

// uniqueArray = arr.filter(function(item, pos) {
//     return arr.indexOf(item) == pos;
// })
// console.log(uniqueArray);



/*2 */
let arr = createArray(2, 9);
let array = createArray(2, 9);
function createArray(start, end) {
    let array= [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}


console.log(array); // [2,3,4,5,6,7,8,9]

/*3 Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.*/
function showNumbers(a, b) {
    let numbers = [];
    for (let i = a; i <=b; i++) {
        numbers.push(i*i);
    }
    return numbers;
    
    }
   
console.log(showNumbers(3, 8));
// далі показати кожне число індекс+1 разів


function repeat(item, index, array){
    let newArr = [];
    for (let i = 0; i < index; i++) {
        newArr = newArr.concat(item)*(index+1);
    }
    return newArr;
}