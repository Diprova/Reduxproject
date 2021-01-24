import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { register } from "../redux/action/auth";
import { connect } from "react-redux";
import { setAlert } from "../redux/action/alert";

const Configuration = ({ register, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password did not match", "danger");
    } else {
      register(name, email, password);
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="form-container container">
      <form className="form container" onSubmit={(e) => submitHandler(e)}>
        <h5>Sign Up</h5>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input className="submit" type="submit" value="REGISTER" />

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  register,
  setAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
