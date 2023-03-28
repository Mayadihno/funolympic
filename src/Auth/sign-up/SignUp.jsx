import { Button, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./SignUp.css";
import { auth, db } from "../../firebase/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const SignUp = () => {
  const [change, setChange] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setChange({ ...change, ...newInput });
  };

  const { password, fullname, email, phoneNumber, confirm } = change;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirm) {
        alert("password and confrim password are not corrrect");
      }
      const users = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: fullname,
        PhoneNumber: phoneNumber,
        Email: email,
      });

      const usersData = users.user;
      const formDataCopy = { ...change };
      delete formDataCopy.password;
      delete formDataCopy.confirm;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", usersData.uid), formDataCopy);
      toast.success("You have successfull create account");
      navigate("/login");
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email have already been used");
        console.log(error);
      } else if (error.code === "auth/weak-password") {
        toast.warning("Password should be more than 6 letters");
      } else {
        toast.error("Something went wrong");
        // console.log(error.message);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="signUp">
        <div className="local">
          <div className="local__content">
            <div className="local__flex">
              <div className="local__image">
                <img
                  src="https://images.pexels.com/photos/38631/bobsled-team-run-olympics-38631.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=""
                />
              </div>
              <div className="local__form">
                <form onSubmit={handleSubmit}>
                  <h2>Create Account as local Streamer</h2>
                  <div className="form__input">
                    <Stack spacing={3}>
                      <h3>Sign in with email and password</h3>
                      <Input
                        type="text"
                        variant="filled"
                        placeholder="Fullname"
                        required
                        name="fullname"
                        onChange={handleChange}
                      />
                      <Input
                        type="email"
                        variant="filled"
                        placeholder="Email"
                        required
                        name="email"
                        onChange={handleChange}
                      />
                      <Input
                        type="tel"
                        variant="filled"
                        placeholder="Mobile Phone Number"
                        required
                        name="phoneNumber"
                        onChange={handleChange}
                      />
                      <Input
                        type="password"
                        required
                        name="password"
                        onChange={handleChange}
                        variant="filled"
                        placeholder="Password"
                      />
                      <Input
                        type="password"
                        name="confirm"
                        onChange={handleChange}
                        required
                        variant="filled"
                        placeholder="Confirm Password"
                      />
                      <div className="button">
                        <Button type="submit" color={"black"}>
                          Sign Up
                        </Button>
                        <p>
                          Already have an account?
                          <Link to="/login"> Sign-in</Link>
                        </p>
                      </div>
                    </Stack>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
