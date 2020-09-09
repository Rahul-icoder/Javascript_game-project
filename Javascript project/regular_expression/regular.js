let regex = /rahul/;

let str = "rahul is good boy but rahul is not studying";

console.log(regex);
console.log(regex.source);


let result1 = regex.exec(str);   // return array 
console.log(result1.index);    // array index 
console.log(result1.length);  // array length
console.log(result1.input);  // input of array at index 0

// Test 
let result2 = regex.test(str);
console.log(result2);           // return a boolean value true false

if(result2){        
    console.log("matched the str");
}
else{
    console.log("not matched ")
}

// search()
let result3 = str.search(regex);
console.log(result3);

//replace() 
regex = /rahul/g;  // g stands for global beacause to make changes everywhere rahul to vicky
let result4 = str.replace(regex, "vicky");
console.log(result4);