// Asynchronous Javascript: Promisses

// Using promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("davi");

// async call
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

getTodos();
console.log("davi");

// both will print the same thing, but async/await is more readable than promises
