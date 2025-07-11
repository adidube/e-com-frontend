import React, { useContext } from 'react'

import ShowOrderProduct from './ShowOrderProduct';
import AppContext from '../../Context/AppContext';

const Profile = () => {
    const { user, userOrder } = useContext(AppContext);
  return (
    <>
      <div className="container text-center my-3">
        <h1>Welcome , {user?.name}</h1>
        <h3>{user?.email}</h3>
        <h1>Total Order :- {userOrder?.length}</h1>
      </div>

      <div className="container my-5">
        <table className="table table-bordered border-primary ">
          <thead className="">
            <tr>
              <th scope="col" className="  text-center">
                OrderItems
              </th>

              <th scope="col" className="  text-center">
                OrderDetails & ShippingAddress
              </th>
            </tr>
          </thead>
          <tbody className="">
            {userOrder && (
              <>
                {userOrder?.map((product) => (
                  <tr key={product._id}>
                    <td className=" ">
                      <ShowOrderProduct items={product?.orderItems} />
                    </td>
                    <td className=" ">
                      <ul style={{ fontWeight: "bold" }}>
                        <li>OrderId : {product?.orderId}</li>
                        <li>PaymentId : {product?.paymentId}</li>
                        <li>PaymentStatus : {product?.payStatus}</li>
                        <li>Name : {product?.userShipping?.fullName}</li>
                        <li>Phone : {product?.userShipping?.phoneNumber}</li>
                        <li>Country : {product?.userShipping?.country}</li>
                        <li>State : {product?.userShipping?.state}</li>
                        <li>PinCode : {product?.userShipping?.pincode}</li>
                        <li>Near By : {product?.userShipping?.address}</li>
                      </ul>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Profile