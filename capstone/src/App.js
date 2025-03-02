import './App.css';
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Little Lemon - Mediterranean Restaurant</title>
        <meta name="description" content="A family-owned Mediterranean restaurant with a modern twist." />
        <meta property="og:title" content="Little Lemon - Mediterranean Restaurant" />
        <meta property="og:description" content="A family-owned Mediterranean restaurant with a modern twist." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.littlelemon.com" />
      </Helmet>
      <header className="header">
        <img src="/images/logo.jpg" id="logo" alt="logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
          <a href="#">Order Online</a>
          <a href="#">Login</a>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist.</p>
          <button className="btn">Reserve a Table</button>
        </div>
        <div className="banner-image">
          <img src="/images/5.jpg" alt="Delicious food" />
        </div>
      </section>
      <section className="specials">
        <h2>This Week's Specials!</h2>
        <button className="btn">Online Menu</button>
        <div className="grid">
          <div className="card">
            <img src="/images/1.jpg" alt="Greek Salad" />
            <h3>Greek Salad <span className="price">$12.99</span></h3>
            <p>A classic Greek salad with fresh ingredients.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
          <div className="card">
            <img src="/images/2.jpg" alt="Bruschetta" />
            <h3>Bruschetta <span className="price">$5.99</span></h3>
            <p>Grilled bread with garlic, salt, and olive oil.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
          <div className="card">
            <img src="/images/3.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert <span className="price">$5.00</span></h3>
            <p>A classic dessert made from a grandma’s recipe book.</p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
