import "./App.css";
// import tech from "./Tech";
import Header from "./Header";
// import Emojibutton from "./EmojiButton.jsx";
import Techcard from "./Techcard";
import { useState, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import About from "./About";

function App() {
  const [techProducts, setTechProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [accountType, setAccountType] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user: {
        username, accountType
      }
    };
    console.log(formData)

    useEffect("http://localhost:5500/db/db.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((data) => setUsername(formData))
  }



  useEffect(() => {
    fetch("http://localhost:5500/db/db.json")
      .then((r) => r.json())
      .then((data) => {
        setTechProducts(data.products);
      });
  }, []);



  const techCards = techProducts.map((product) => {
    return (
      <Techcard
        key={product.id}
        name={product.name}
        image={product.image}
        attributes={product.attributes}
        price={product.price}
      />
    );
  });


  return (
    <div>
      <Header />
      { /* <Router>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */ }


      <main>{techCards}</main>
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select
          id="type"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        >
          <option value="Dabbler in Technology">Dabbler</option>
          <option value="Tech Enthusiast">Enthusiast</option>
          <option value="Tech Professional">Pro</option>
        </select>

        <input type="submit" value="Enter details" />
        <h2>User Details</h2>
        <h3>{username}</h3>
        <h4>{accountType}</h4>
      </form>
    </div >
  );
}
export default App;