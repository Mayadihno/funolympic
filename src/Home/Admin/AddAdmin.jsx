import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebase";
import "./admin.css";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const [change, setChange] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setChange({ ...change, ...newInput });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataCopy = { ...change };
      formDataCopy.timestamp = serverTimestamp();
      const addRef = collection(db, "admin");
      await addDoc(addRef, formDataCopy);
      toast.success("You have successfull Add new admin");
      navigate("/fixtures");
      e.target.reset();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <React.Fragment>
      <div className="add">
        <div className="add__background">
          <div className="add__content">
            <h2
              style={{
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Add another admin
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="name">
                <label htmlFor="name">Fullname</label>
                <Input
                  type="text"
                  placeholder="Enter Fullname"
                  id="name"
                  size="md"
                  name="fullname"
                  variant="outline"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  size="md"
                  variant="outline"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="phones">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter Phone Number"
                  id="phone"
                  size="md"
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                  variant="outline"
                />
              </div>
              <Button
                sx={{ mt: "13px" }}
                type="submit"
                variant={"solid"}
                colorScheme="messenger"
              >
                Add Admin
              </Button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddAdmin;
