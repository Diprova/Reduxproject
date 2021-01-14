import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ context }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [popupAlert, setPopupAlert] = useState(false);

  const { email, password } = formData;
  let history = useHistory();

  useEffect(() => {
    if (!context.user) {
      context.login();
      context.loadUser();
    }
  }, [context.user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await context.login(email, password);
    console.log(formData);
    console.log(context.user);
    console.log(localStorage.getItem("token"));
    if (localStorage.token !=="undefined") {
      context.loadUser();
      history.push("/");
    } else {
      setPopupAlert(true);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-formContainer container">
      <form className="form container" onSubmit={(e) => submitHandler(e)}>
        <h5>Login</h5>
        {popupAlert && <p className="alert"> Invalid Credentials</p>}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
