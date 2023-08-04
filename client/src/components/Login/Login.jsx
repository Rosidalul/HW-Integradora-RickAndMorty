import React, { useState } from "react";
import { validate } from "./validate";

const Login = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(userData);
  };

  const handleInputChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value,
    });
    setErrors(validate({
      ...userData,
      [evento.target.name]: evento.target.value,
    }));
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mx-sm-3">
        <label htmlFor="inputUser" className="sr-only">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="inputUser"
          placeholder="Email"
          value={userData.username}
          name="username"
          onChange={handleInputChange}
        />
        <br />
        {errors.username ? <span>{errors.username}</span> : ""}
      </div>
      <div className="form-group mx-sm-3">
        <label htmlFor="inputPass" className="sr-only">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPass"
          placeholder="Password"
          value={userData.password}
          name="password"
          onChange={handleInputChange}
        />
        <br />
        {errors.password ? <span>{errors.password}</span> : ""}
      </div>
      <div className="form-group mx-sm-3">
        <span></span>
        <button className="btn btn-outline-success" type="submit">
          LOGIN
        </button>
      </div>
    </form>
  );
};

export default Login;
