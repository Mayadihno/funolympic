import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase/firebase";
import Spinner from "./Spinner";
import "./Videos.css";

const Videos = () => {
  const [post, setPost] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const initRef = useRef();
  const navigate = useNavigate();

  const userDocREf = query(
    collection(db, "videos"),
    orderBy("timestamp", "desc")
  );

  const getFunc = async () => {
    onSnapshot(userDocREf, (snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(true);
    });
  };
  useEffect(() => {
    getFunc();
  }, []);

  const handleDelete = async (PostId) => {
    try {
      await deleteDoc(doc(db, "videos", PostId));
      const updatePost = post.filter((post) => post.id !== PostId);
      setPost(updatePost);
      navigate("/fixtures", { replace: true });
      toast.success("Successfully deleted the Post");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.phoneNumber === "+447774614335";
        setAdmin(userEmail);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="videos">
        <h3>Videos Of the Event</h3>

        <div className="videoGrid">
          {post &&
            post.map((data) => {
              return (
                <Card key={data.id} className="card__bg">
                  <div className="videogrids" key={data.id}>
                    <video width="540px" height="330px" controls>
                      <source src={data.videoUrl} />
                    </video>
                  </div>
                  <CardBody>
                    <p>video description</p>
                    <Flex justifyContent={"space-between"} alignItems="center">
                      <Text>{data.desc}</Text>
                      {admin && (
                        <Box>
                          <Popover closeOnEsc initialFocusRef={initRef}>
                            {({ onClose }) => (
                              <>
                                <PopoverTrigger>
                                  <Button colorScheme={"red"}>
                                    <HiTrash fontSize={23} color="#fff" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                  style={{
                                    backgroundColor: "#2D3748",
                                    color: "white",
                                  }}
                                >
                                  <PopoverArrow />
                                  <PopoverCloseButton />
                                  <PopoverHeader>Confirmation!</PopoverHeader>
                                  <PopoverBody fontSize={13}>
                                    Are you sure you want to Delete this Video?
                                  </PopoverBody>
                                  <PopoverFooter
                                    display="flex"
                                    justifyContent="flex-end"
                                  >
                                    <ButtonGroup size="sm">
                                      <Button
                                        variant="outline"
                                        onClick={onClose}
                                        ref={initRef}
                                      >
                                        No
                                      </Button>
                                      <Button
                                        colorScheme="red"
                                        onClick={() => handleDelete(data?.id)}
                                      >
                                        Yes
                                      </Button>
                                    </ButtonGroup>
                                  </PopoverFooter>
                                </PopoverContent>
                              </>
                            )}
                          </Popover>
                        </Box>
                      )}
                    </Flex>
                  </CardBody>
                </Card>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Videos;
