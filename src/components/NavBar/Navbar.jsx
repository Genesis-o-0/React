import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../About/About";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            🛒 Shop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup ">
            <div className="navbar-nav  ms-auto">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/shop" Component={Shop} />
        <Route path="/about" Component={About} />
        <Route path="/product-details/:id" Component={ProductDetails}></Route>
      </Routes>
    </BrowserRouter>
  );
}
