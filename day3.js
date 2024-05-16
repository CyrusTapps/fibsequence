// 5_8_24

//Objects - how computer sees the world

//Array is an object

//Assertion test cases = Edge Cases

let styles ={
    color: "red",
    fontSize: 12,
    
}


let Student = {
    name: "Shawn",
    age: 44,
    location: {
        state:"TN",
        city:"Big Rock",
        zipCode: "37023"
    },
    phoneNumber: "931-555-5555"
        
}
console.log(Student)

// dot notation  ex.       console.log(Student.name)
//bracket notation ex      console.log(student["name"])   must be a string in brackets

console.log(Object.keys(Student))           //pulls name, age, etc
console.log(Object.values(Student))         //pulls values of above
console.log(Object.entries(Student))
