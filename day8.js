// 5-16-24

//objects - rule the world
function reverseString(input) {
    // console.log(input)
    let result = []       //empty array to hold values from loop
    let split = input.split("")    // .split(") converts a string to a array
    // console.log("split", split)
    for (let i = 0; i < split.length; i++) {
        // console.log("i:", i, "split[i]", split[i])
                result.unshift(split[i])                         //unshift() puts item in front of array
        // console.log("result", result, "split[i]", split[i])
    }
// console.log("result", result.join(""))
return result.join("")    // .join("")  converts the array back to a string
}
console.log(reverseString("abcdefghijklmnopqrstuvwxyz"))

//need to change string structure