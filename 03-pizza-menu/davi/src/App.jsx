import pizzaData from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Order />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Belo's Pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza pizzaObj={pizza} key={index} />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <h3>{props.pizzaObj.name}</h3>
      <p>Ingredients: {props.pizzaObj.ingredients}</p>
      <p>Price: ${props.pizzaObj.price + 3}</p>
    </li>
  );
}

function Order() {
  return (
    <div className="order">
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 23;
  const isOpen = hour > openHour && hour <= closeHour;

  let message;
  if (isOpen) {
    message = <p>We're currently open</p>;
  } else {
    message = <p>Sorry, we're currently closed</p>;
  }

  return (
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()}</p>
      {message}
    </footer>
  );
}

export default App;
