import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Registered } from "./pages/Registered";
import Cart from "./components/Cart";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registered" element={<Registered />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
