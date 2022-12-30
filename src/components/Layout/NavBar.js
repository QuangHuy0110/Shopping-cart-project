import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/logo.png";
import "./MainHeader.css";
const Navbar = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalAmount);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
        >
          <img src={Logo} alt="site icon" />
          <span className="text-uppercase fw-lighter ms-2">guxxi</span>
        </Link>
        <div className="order-lg-2 nav-btns">
          <Link to="/cart">
            <button type="button" className="btn position-relative">
              <i className="fa fa-shopping-cart" />
              <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                {cartQuantity}
              </span>
            </button>
          </Link>
        </div>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <Link to="/" className="nav-link text-uppercase text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link
                to="/products"
                className="nav-link text-uppercase text-dark"
              >
                Products
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <a className="nav-link text-uppercase text-dark" href="#about">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
