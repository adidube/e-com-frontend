import React, {useEffect, useState } from "react";


const ShowOrderProduct = ({ items }) => {
 
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let qty = 0;
    let price = 0;
    if (items) {
      for (let i = 0; i < items?.length; i++) {
        qty += items[i].qty;
        price += items[i].price;
      }
    }
    setPrice(price);
    setQty(qty);
  }, [items]);

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
            
          </tr>
        </thead>
        <tbody>
          {items?.map((product) => (
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
            
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ShowOrderProduct;
