import React, { useContext, useState } from "react";
import AppContext from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate=useNavigate();

  const {register}=useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
   const result=await register(name, email, password);

   if(result.success){
    navigate('/login')
   }

  }
  return (
    <div className="container my-5" style={{width: "600px",
    border: "2px solid black",
    borderRadius: "10px",}}>
      <h2 className="text-center">Register</h2>
      <form onSubmit={onSubmitHandler} className="my-3">
        <div className="mb-3 my-3 p-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={onChangerHandler}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 my-3 p-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
          name="email"
          value={formData.email}
          onChange={onChangerHandler}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3  p-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={onChangerHandler}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
          <div className="d-grid col-6 mx-auto my-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
      </form>
    </div>
  );
}

export default Register;
