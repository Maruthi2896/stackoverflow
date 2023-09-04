import { Formik, Form } from "formik";
import React, { useState } from "react";
import "../styles/login.css";
import TextField from "./text-field";
import axios from "axios";
// import { TextField} from "@mui/material";

import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  //validation schema
  const validation = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password mut be atleast 6 characters")
      .required("Password is required"),
  });

  //login event handler
  const handleLogin = (e, values) => {
    let data = {
      email: values.email,
      password: values.password,
    };
    console.log(data);
    try {
      axios.post(`https://password-reset-z83f.onrender.com/login`, data).then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          window.localStorage.setItem("token", res.data.token);
          navigate("/main");
        } else {
          alert(res.data.message);
        }
      });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validation}
      >
        {(Formik) => {
          return loggedIn && Formik.errors ? (
            navigate("/main")
          ) : (
            <div className="login-wrapper">
              <h3 className="login-header">Login</h3>
              <div className="form-wrapper">
                <Form>
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Password" name="password" type="password" />
                  <br />
                  <div>
                    <a
                      style={{ textDecoration: "none", margin: "25px" }}
                      href="/sign-up"
                    >
                      <Link to="/sign-up"> newUser? Register</Link>
                    </a>
                    <a
                      style={{ textDecoration: "none", margin: "25px" }}
                      href="/password-reset"
                    >
                      <Link to="/password-reset">Forgot Password</Link>
                    </a>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="login-button"
                    value={Formik.isValid}
                    onClick={() => handleLogin(Formik.isValid, Formik.values)}
                  >
                    Login
                  </button>
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    </React.Fragment>
  );
};

export default Login;
