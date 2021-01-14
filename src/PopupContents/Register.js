import React, { useState, useEffect } from "react";
import Rest from "../Utility/restapi";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

const Configuration = () => {
  const [pwdalert, setPwdAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const alert = useAlert();

  let history = useHistory();

  let errors;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (password !== password2) {
      setPwdAlert(true);
    } else {
      let value = await Rest.post("/api/users", { name, email, password });

      if (value.status >= 200 && value.status <= 300) {
        history.push("/login");
      } else {
        setPopupAlert(true);
        let resError = value.data.errors;
        errors = resError.map((e) => {
          return e.msg;
        });
        alert.show(<div style={{color:"red"}}>{errors.toString()}</div>);
      }
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-container container">
      <form className="form container" onSubmit={(e) => submitHandler(e)}>
        <h5>Sign Up</h5>
        {pwdalert && (
          <p className="alert">
            {password !== password2 && "Your password does not match"}
          </p>
        )}
        <div>
          <p>Name:</p>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <p>Email:</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <p>Password:</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <p>Confirm Password:</p>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already a user?
          <span className="login-butn" onClick={() => history.push("/login")}>
            Login
          </span>
        </span>
      </form>
    </div>
  );
};

export default Configuration;
