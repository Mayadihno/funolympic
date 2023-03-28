import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
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
import React, { useState, useEffect, useRef } from "react";
import { HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase/firebase";
import Spinner from "../Video/Spinner";
import "./gallery.css";

const Gallery = () => {
  const [post, setPost] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initRef = useRef();

  const userDocREf = query(
    collection(db, "images"),
    orderBy("timestamp", "desc")
  );

  const getFunc = async () => {
    onSnapshot(userDocREf, (snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(true);
    });
  };

  const handleDelete = async (PostId) => {
    try {
      await deleteDoc(doc(db, "images", PostId));
      const updatePost = post.filter((post) => post.id !== PostId);
      setPost(updatePost);
      toast.success("Successfully deleted the Post");
      navigate("/gallery", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFunc();
  }, []);

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
      <div className="gallery">
        <h3>Pictures of the Event so far</h3>
        {!loading ? (
          <Flex justifyContent={"center"} alignItems="center">
            <Spinner msg={"Image  Loading...."} />
          </Flex>
        ) : (
          <div className="gallery__card">
            {post &&
              post.map((data) => {
                return (
                  <div className="cardPost" key={data?.imageUrl}>
                    <Card maxW="sm" className="card__bg">
                      <Image
                        src={data?.imageUrl}
                        alt="Event Image"
                        borderRadius="lg"
                      />
                      <CardBody>
                        <h6>Image Description:</h6>
                        <Flex
                          justifyContent={"space-between"}
                          alignItems="center"
                        >
                          <p>{data?.desc}</p>

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
                                      <PopoverHeader>
                                        Confirmation!
                                      </PopoverHeader>
                                      <PopoverBody fontSize={13}>
                                        Are you sure you want to Delete this
                                        Image?
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
                                            onClick={() =>
                                              handleDelete(data?.id)
                                            }
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
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Gallery;
