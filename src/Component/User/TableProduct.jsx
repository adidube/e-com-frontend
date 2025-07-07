import React,{useContext,useEffect,useState} from 'react'
import AppContext from '../../Context/AppContext';


const TableProduct = ({ cart }) => {
    const {decreaseQty, addToCart, removeFromCart, clearCart } =
      useContext(AppContext);
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {
      let qty = 0;
      let price = 0;
      if (cart?.items) {
        for (let i = 0; i < cart.items?.length; i++) {
          qty += cart.items[i].qty;
          price += cart.items[i].price;
        }
      }
      setPrice(price);
      setQty(qty);
    }, [cart]);

    
  return (
    <>
      <table className="table table-bordered border-primary  text-center">
        <thead>
          <tr>
            <th scope="col" className=" ">
              Product Img
            </th>
            <th scope="col" className=" ">
              Title
            </th>
            <th scope="col" className=" ">
              Price
            </th>
            <th scope="col" className=" ">
              Qty
            </th>
            <th scope="col" className=" ">
              Qty++
            </th>
            <th scope="col" className=" ">
              Qty--
            </th>
            <th scope="col" className=" ">
              remove
            </th>
          </tr>
        </thead>
        <tbody>
          {cart?.items?.map((product) => (
            <tr key={product._id}>
              <th scope="row" className=" ">
                <img
                  src={product.imgSrc}
                  style={{ width: "50px", height: "50px" }}
                />
              </th>
              <td className=" ">{product.title}</td>
              <td className=" ">{product.price}</td>
              <td className=" ">{product.qty}</td>
              <td className=" ">
                <button className="btn btn-warning"
                  
                  onClick={() =>
                    addToCart(
                      product?.productId,
                      product.title,
                      product.price / product.qty,
                      1,
                      product.imgSrc
                    )
                  }
                >
                  +
                </button>
              </td>
              <td className=" ">
                <button className="btn btn-warning"
                 
                  onClick={() => decreaseQty(product?.productId, 1)}
                >
                  <span style={{fontWidth:"bold"}}></span>-
                </button>
              </td>
              <td className=" ">
                <button className='btn btn-warning'
                 
                  onClick={() => {
                    if (confirm("Are you sure, want remove from cart")) {
                      removeFromCart(product?.productId);
                    }
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <th scope="row" className=" "></th>
            <td className=" ">
              {" "}
              <button
                className="btn btn-primary"
                style={{ fontWeight: "bold" }}
              >
                Total
              </button>{" "}
            </td>
            <td className=" ">
              {" "}
              <button
                className="btn btn-warning"
                style={{ fontWeight: "bold" }}
              >
                {price}
              </button>
            </td>
            <td className=" ">
              <button className="btn btn-info" style={{ fontWeight: "bold" }}>
                {qty}
              </button>
            </td>
            <td className=" "></td>
            <td className=" "></td>
            <td className=" "></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableProduct