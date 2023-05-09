import React from "react";
import FixtureUpload from "../Fixtures/FixtureUpload";
import ImageModal from "../Gallery/ImageModal";
import VideoModal from "../Video/VideoModal";
import "./admin.css";
import {
  Box,
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddAdmin from "./AddAdmin";

const Admin = () => {
  const [data, setData] = useState([]);
  // const [admin, setAdmin] = useState(
  //   Array.from({ length: data.length }).fill(false)
  // );
  const collectionRef = collection(db, "admin");
  const navigate = useNavigate();

  const getData = async () => {
    const data = await getDocs(collectionRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // const handleAdmin = (id) => {
  //   setAdmin((prevState) => {
  //     const tutorsArr = [...prevState];
  //     tutorsArr[id] = !tutorsArr[id];
  //     return tutorsArr;
  //   });
  // };
  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "admin", id));
      const filteed = data.filter((item) => item.id !== id);
      setData(filteed);
      toast.success("One Admin Removed");
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className="admin">
        <div className="admin__content">
          <div className="admin_-text"></div>
          <div className="admin__flex">
            <ImageModal /> <VideoModal /> <FixtureUpload /> <AddAdmin />
          </div>
        </div>
        {data.length === 0 ? (
          ""
        ) : (
          <div className="users-data">
            <div className="users">
              <TableContainer>
                <Table variant="striped" colorScheme="facebook">
                  <TableCaption>All Admin Present</TableCaption>
                  <Thead sx={{ textAlign: "center" }}>
                    <Tr>
                      <Th>Email</Th>
                      <Th>Fullname</Th>
                      <Th>Phone Number</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody sx={{ textAlign: "center" }}>
                    {data.map((data, index) => {
                      return (
                        <Tr key={data.id}>
                          <Td>{data.email}</Td>
                          <Td>{data.fullname}</Td>
                          <Td>{data.phoneNumber}</Td>
                          <Td>
                            <Box sx={{ columnGap: "10px", display: "flex" }}>
                              {/* <Button
                              variant={"outline"}
                              colorScheme="twitter"
                              onClick={() => handleAdmin(index)}
                            >
                              {admin[index] ? "Remove user" : "Add user"}
                            </Button> */}
                              <Button
                                variant={"outline"}
                                colorScheme="red"
                                onClick={() => deleteUser(data.id)}
                              >
                                Remove Admin
                              </Button>
                            </Box>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Admin;
