import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const url = process.env.REACT_APP_API;
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${url}/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - E-Shop">
      <div className="register_div">
        <div className="form-container" >
          <form onSubmit={handleSubmit}>
            <h4 className="title">REGISTER FORM</h4>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                placeholder="Enter Your Name"
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
                placeholder="Enter Your Email "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="exampleInputAnswer"
                placeholder="What is Your Favorite sports"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              REGISTER
            </button>
          </form>
        </div>

        <div className="already_div">
          <div className="login_link">
            <h4>If you are new here,</h4>
            <h4>Kindly Register</h4>
            <h1>Already Have Account ?</h1>

            <NavLink to="/login" className="nav-link_reg">
              Login Now
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
