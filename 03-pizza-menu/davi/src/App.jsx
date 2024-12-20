import pizzaData from "./data";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Belo's Pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 9;
  const closeHour = 23;
  const isOpen = hour > openHour && hour <= closeHour;

  if (isOpen) alert("We're currently open");
  else alert("Sorry, we're currently closed");

  return (
    <footer>
      <p>{new Date().toLocaleTimeString()}</p>
      <p>We're currently open</p>
    </footer>
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
