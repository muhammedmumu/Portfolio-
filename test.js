//////// use asyncronous programming
// print Function Started
// 5 seconds timeout
// print Function Ended
// return Function Completed
//////// write your code below
////////setTimeout(fn(),delay)

/*async function myFunc() {
console.log("Function Started");

await new Promise((resolve) => {
  setTimeout(() => {
    console.log("Function Ended");
    resolve();
  }, 5000);
});

return "Function Completed";
}*/

//////// write your code above

//////// dont touch below code
///console.log("Function Not Started");
/*myFunc().then((data) => {
  console.log(data || "This text should not print");
});*/
///console.log("Function Executed");
//////// dont touch above code

/*
Expected Output:
Function Not Started
Function Started
Function Executed
Function Ended
Function Completed
*/

//////// use asynchronous programming
// print Start
// after 2 seconds print Middle
// after 1 second print Quick
// print End immediately
// return Done after all async work

async function mytwo() {
  console.log("Start");
  let data = "Function Completed";
  setTimeout(() => console.log("Quick"), 1000);
  setTimeout(() => console.log("Middle"), 2000);
  console.log("end");
  return data;
}

mytwo().then((dota) => {
  console.log(dota);
});
//////// Expected Output:
/*
Start;
End;
Quick;
Middle;
Done;
*/
