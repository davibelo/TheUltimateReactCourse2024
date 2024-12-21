import pizzaData from "./data";
import "./index.css";

// Check if it's open
const hour = new Date().getHours();
const openHour = 9;
const closeHour = 23;
const isOpen = hour > openHour && hour <= closeHour;

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
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza pizzaObj={pizza} key={index} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>Ingredients: {pizzaObj.ingredients}</p>
      <p>Price: ${pizzaObj.price + 3}</p>
    </li>
  );
}

function Order() {
  return (
    <div className="order">
      {isOpen && <p>"Order online or come and visit us until {closeHour}:30</p>}
      {isOpen && <button className="btn">Order</button>}
    </div>
  );
}

function Footer() {
  let message;
  if (isOpen) {
    message = <p></p>;
  } else {
    message = <p>Sorry, we're currently closed</p>;
  }

  return (
    <footer className="footer">
      <p>Time now</p>
      <p>
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </p>
      {message}
    </footer>
  );
}

export default App;
