import pizzaData from "./data";

function App() {
  return (
    <div>
      <h1>Pizza App</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="/pizzas/focaccia.jpg" alt="Focaccia" />
      <p>Name: {pizzaData[0].name}</p>
      <p>Ingredients: {pizzaData[0].ingredients}</p>
    </div>
  );
}

const PizzaList = () => {
  return (
    <div>
      <h1>Pizza Menu</h1>
      <ul>
        {pizzaData.map((pizza, index) => (
          <li key={index}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
