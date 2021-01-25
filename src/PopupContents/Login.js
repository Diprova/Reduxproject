import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { setAlert } from "../redux/action/alert";
import { login } from "../redux/action/auth";
import { connect } from "react-redux";

const Login = ({ login, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-formContainer container">
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <h5>Login</h5>
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

        <input className="submit" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  login,
  setAlert,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
