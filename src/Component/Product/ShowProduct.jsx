import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { Link } from "react-router-dom";

function ShowProduct() {
  const { products, filteredData, addToCart } = useContext(AppContext);
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row d-flex justify-content-center align-items-center my-5">
        {filteredData?.map((product) => (
          <div
            key={product._id}
            className="container my-3 col-md-4 d-flex justify-content-center align-items-center"
            style={{ borderRadius: "50%" }}
          >
            <div className="card  text-center" style={{ width: "18rem" }}>
              <Link
                to={`/product/${product._id}`}
                className="d-flex justify-content-center align-item-center p-3"
              >
                <img
                  src={product.imgSrc}
                  className="card-img-top"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                    border: "2px solid yellow",
                  }}
                />
              </Link>

              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="my-3">
                  <button className="btn btn-primary mx-3">
                    {"₹"} {product.price}
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={()=>addToCart(
                      product._id,
                      product.title,
                      product.price,
                      1,
                      product.imgSrc
                    )}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ShowProduct;
