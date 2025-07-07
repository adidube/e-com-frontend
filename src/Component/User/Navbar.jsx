import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppContext from "../../Context/AppContext";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState();
  const location = useLocation();
  const { setFilteredData, products, logout, isAuthenticated, cart } =
    useContext(AppContext);

  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console;
    navigate(`/product/search/${searchTerm.trim()}`);
    setSearchTerm("");
  };

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() == cat.toLowerCase()
      )
    );
  };
  const filterbyPrice = (price) => {
    setFilteredData(products.filter((data) => data.price >= price));
  };

  return (
    <div className="nav sticky-top">
      <div className="nav-bar">
        <Link to="/" className="left" style={{ textDecoration: "none" }}>
          <h3>E-Com</h3>
        </Link>
        <form className="search-bar" onSubmit={onSubmitHandler}>
          <span className="material-symbols-outlined">search</span>
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(searchTerm);
            }}
            type="text"
            placeholder="Search Product...."
          />
        </form>
        <div className="right">
          {isAuthenticated && (
            <>
              <Link to={"/cart"} type="button" class="btn btn-primary position-relative">
                Cart
                {cart?.items?.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart?.items?.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>)}
              </Link>

              <Link to={"/profile"} className="btn btn-info mx-3">
                profile
              </Link>
              <button
                className="btn btn-danger mx-3"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                logout
              </button>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="btn btn-secondary mx-3">
                login
              </Link>
              <Link to={"/register"} className="btn btn-info mx-3">
                register
              </Link>
            </>
          )}
        </div>
      </div>
      {location.pathname == "/" && (
        <div className="sub-bar ">
          <div className="items" onClick={() => setFilteredData(products)}>
            Store
          </div>
          <div className="items" onClick={() => filterbyCategory("mobile")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterbyCategory("fashion")}>
            Fashion
          </div>
          <div className="items" onClick={() => filterbyCategory("laptop")}>
            Laptop
          </div>
          <div className="items" onClick={() => filterbyCategory("headphones")}>
            Hedphones
          </div>
          {/* <div className="items" onClick={() => filterbyPrice(15999)}>
            15999
          </div>
          
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
