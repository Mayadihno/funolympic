import { Button, Input, Stack } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...newInput });
  };
  const { email, password } = formData;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // const { refreshToken } = user;
      // localStorage.setItem("accessToken", JSON.stringify(refreshToken));

      navigate("/fixtures", { replace: true });
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/wrong-password" || "auth/user-not-found") {
        toast.error("Incorrect Email or Password");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="login">
        <div className="login__content">
          <div className="login__flex">
            <div className="login__image">
              <img
                src="https://images.pexels.com/photos/13699281/pexels-photo-13699281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="login__text">
              <img
                src="https://olympics.com/topic-assets/olympic-games-assets/olympic-rings.svg"
                alt=""
              />
              <h2>Welcome to your Olympic ID</h2>

              <div className="form">
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <h3>Sign in with email and password</h3>
                    <Input
                      type="text"
                      variant="filled"
                      placeholder="Email"
                      required
                      name="email"
                      onChange={handleChange}
                    />
                    <Input
                      type="password"
                      required
                      variant="filled"
                      placeholder="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <div className="button">
                      <Button type="submit" color={"black"}>
                        Login
                      </Button>
                    </div>
                  </Stack>
                </form>
                <div className="form-input">
                  <p>
                    Don't have an account?
                    <Link
                      to="/localUser-signup"
                      style={{ textDecoration: "underline", marginLeft: "5px" }}
                    >
                      Sign-Up
                    </Link>
                  </p>
                  <Link to={"/forget-password"}>
                    <p style={{ textDecoration: "underline" }}>
                      Forget Password
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
