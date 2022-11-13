let numbers = [24, 35, 78, 11, 87, 24, 111, 224]
numbers.sort((a,b) => a-b);   // [11, 24, 24, 35,78, 87, 111, 224]
// console.log(numbers);
 
let key = 111;
let minIndex = 0;
let maxIndex = numbers.length - 1;
 
while (minIndex <= maxIndex){
    let pivot = Math.floor((maxIndex + minIndex)/2)
    if( key == numbers[pivot]){
        console.log("you found: " , numbers[pivot])
        break;
    } else if(key < numbers[pivot]){
        maxIndex = pivot - 1;
    } else {
        minIndex = pivot + 1
    }
    if(maxIndex == pivot || minIndex == pivot){
        console.log(" not found")
    }
}
