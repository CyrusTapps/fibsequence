//5-7-24

//zero based indexing ie 0,1,2,3,etc
//lenth - number of inidicies (items) in array

let str = "Welcome Class"
// console.log(str.length)
// console.log(str[0])
// console.log(str.indexOf("C"))

// Null datatype - developer defined nul value

let first =null
// console.log("first",first)
// Undefined datatype - 

let test
// console.log("test", test)

//Arrays - multiple values within []

let myArr=[1,2,3, "anotherValue"]
console.log(myArr)
console.log(myArr[3])
console.log(myArr.length)

//max safe integer length w/o BigInt = 21 digits

//Array methods
   
    //Pop - removes last item
    //push - add item to back or array -returns total number of indicies in array on return
    //shift - removes first item
    //unshift - adds item to front of array
    //split - (*see day 4 notes for ex) - 
    //join - converts array to a string

//String Methods
    //.length - returns length of string
    //.split - converts string to array

let arr = ["a", "b", "c", "d", "e","f"] //stack
console.log(arr)     
console.log("prePop", arr)
console.log("what am i popping", arr.pop())
// let popped = arr.pop()
// console.log(popped)
console.log("postpop", arr)


arr.push("Shawn")
console.log("postPush",arr)

arr.shift(arr)
console.log("postShift", arr)

arr.unshift("Shawn")
console.log("postUnshift", arr)

arr[3]="Hello"
console.log(arr)
