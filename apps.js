let ages = [3,9,23,64,2,8,28,93]
var firstNumber = ages[0]
var lastNumber = ages[ages.length-1]
console.log(lastNumber - firstNumber)
ages.push(102)
console.log(ages)
// let ages = [3,9,23,64,2,8,28,93]
let sum  = ages.reduce(function(acc, curV){
    return acc + curV    
    
})
console.log(sum/ages.length)



let names = ['Sam', 'Tammy', 'Tim', 'Sally', 'Buck', 'Bob']
let lengths = names.map(function(element){
    return element.length;
})
console.log(lengths)
let total = lengths.reduce(function(plus, first){
    return plus + first;
})
console.log(names)
console.log(total)
console.log(total / lengths.length)

//6

let namesArray = ["Kelly", "Sam", "Kate"];
console.log(namesArray)
console.log(namesArray + ' ' + names)

 let nameLengths = namesArray.map(function(element){
    return element.length
 })
 console.log(nameLengths)
 let add = nameLengths.reduce(function(plus, first){
    return plus + first;
})
console.log(add)

function twoParameters(a, b){
    let result = " ";
    for(let i = 0; i < b; i++){
        result += a;        
    }
    return result;
}
console.log(twoParameters("hello ", 3))

function mbed(firstName, lastName){
    return firstName + " " + lastName
}
console.log(mbed("Joey", "Mike"))
// var fullName = mfed("Joey", "Mike")
// console.log(fullName)

// 9.Write a function that takes an array of numbers and returns 
// true if the sum of all the numbers in the array is greater than 100.
 function arrayOfNumbers(num1, num2, num3){ 
     if((num1 + num2 + num3) > 100){
         return true
     }
    } 
 console.log(arrayOfNumbers(16, 69, 48))

//  10.Write a function that takes an array of numbers and
//   returns the average of  all the elements in the array.

let itit = [16,20,66,35,78];
let nom = itit.reduce(function(accu, currVa){
    return accu + currVa 
});
console.log(nom / itit.length)

// 11.	Write a function that takes two arrays of
//  numbers and returns true if the average of 
//  the elements in the first array is greater
//   than the average of the elements in the
//    second array.

// let firstFunction = [23, 49, 60, 30]
// let secondFunction = [76, 92, 55, 42] 
// if (firstNumber >)

let firstFunction = [23, 49, 60, 30]
let nome = firstFunction.reduce(function(accu, currVa){
    return accu + currVa
});
var numeral = nome / firstFunction.length
console.log(numeral)
// console.log(nome / firstFunction.length)
let secondFunction = [76, 92, 55, 42] 
let nomes = secondFunction.reduce(function(accu, currVa){
    return accu + currVa
});
var n = nomes / secondFunction.length
console.log(n)
//console.log(nomes / secondFunction.length)
function mynumbe(numeral, n){
    if(numeral > n){
        return true
    } else {
        return false
    }
}
console.log(mynumbe(40.5, 66.25))


function willBuyDrink(isHotOutside, moneyInPocket){
     if(isHotOutside == "yes" && moneyInPocket > 10.50){
         return true         
     }
 }
 console.log(willBuyDrink("yes", 12.50))

 //The function described the food and temperature used to cook the food 

 function cookInOven(food, temperature){
     return food + " cooked at " + temperature
 }
 var lunch = cookInOven("macaroni and cheese", 300 );
 console.log(lunch)
