// JavaScript has a non-blocking Nature
// Its execute line after line of code without waiting for the previous line to complete

// Using .then()
function getTodos0() {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json()
  );
}

const data1 = await getTodos0();
console.log(data1);
console.log("davi");

// Using async function with await
// need to use async before the function
async function getTodos1() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

const data2 = await getTodos1();
console.log(data2);
console.log("davi");

// both will print the same thing, but async/await is more readable than promises
