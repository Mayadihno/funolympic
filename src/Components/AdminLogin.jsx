import { Button, Input, Stack } from "@chakra-ui/react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import "./AdminLogin.css";
const AdminLogin = () => {
  const [formData, setFormData] = useState("");
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...newInput });
  };
  const { email = admin, password } = formData;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email === "niyiolatunji60@gmail.com";
        setAdmin(userEmail);
        //"+447774614335"
      } else {
      }
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === "niyiolatunji60@gmail.com") {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/fixtures", { replace: true });
        console.log(formData);
        e.target.reset();
      } else {
        toast.error("Incorrect Email or Password");
      }
    } catch (error) {
      if (error.code === "auth/wrong-password" || "auth/user-not-found") {
        toast.error("Incorrect Email or Password");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="adminLogin">
        <h3>Login as admin</h3>
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
                <Button type="submit" color={"twitter"}>
                  Login
                </Button>
              </div>
            </Stack>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLogin;
