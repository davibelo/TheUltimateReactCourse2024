// Asynchronous Javascript: Promisses

// not async call - does not work because the function returns before the data is fetched
function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data);
}
const todos = getTodos();
console.log(todos);

// async call
async function getTodosAsync() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todosAsync = getTodosAsync();
console.log(todosAsync);
