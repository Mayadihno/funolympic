import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
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
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../../../firebase/firebase";

const image =
  "https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Volleyball = () => {
  const [football, setFootball] = useState([]);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(false);
  const initRef = useRef();

  const getCategories = async () => {
    const collectionRef = collection(db, "fixtures");
    const q = query(
      collectionRef,
      where("categories", "==", "Volleyball"),
      orderBy("id", "desc")
    );
    const querySnapshot = await getDocs(q);
    const queryData = querySnapshot.docs.map((doc) => doc.data());
    setFootball(queryData);
    setContent(true);
  };

  useEffect(() => {
    getCategories();
  }, []);
  const handleClick = () => {
    setShow(!show);
  };

  const date = football[0]?.date;
  const date1 = football[1]?.date;
  const date2 = football[2]?.date;
  const date3 = football[3]?.date;
  const date4 = football[4]?.date;
  const date5 = football[5]?.date;
  const date6 = football[6]?.date;
  const date7 = football[7]?.date;

  const fixture1 = football[0]?.matchFixtures;
  const fixture2 = football[1]?.matchFixtures;
  const fixture3 = football[2]?.matchFixtures;
  const fixture4 = football[3]?.matchFixtures;
  const fixture5 = football[4]?.matchFixtures;
  const fixture6 = football[5]?.matchFixtures;
  const fixture7 = football[6]?.matchFixtures;
  const fixture9 = football[9]?.matchFixtures;
  return (
    <React.Fragment>
      <div className="football">
        <Card maxW="md" className="card__bg card-grid">
          <Image
            objectFit="cover"
            src={image}
            alt="SportImage"
            position={"relative"}
          />
          <CardBody>
            <Box>
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  backgroundColor: "black",
                  color: "white",
                  padding: "5px 15px",
                  borderRadius: "10px",
                }}
              >
                <h4
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  {football[0]?.categories}
                </h4>
              </div>
              <Popover
                closeOnEsc
                placement="top-start"
                initialFocusRef={initRef}
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
                // className="card__bg"
              >
                {({ onClose }) => (
                  <>
                    <PopoverTrigger>
                      <Button colorScheme={"red"}>
                        See {football[0]?.categories} Fixtures
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      style={{
                        backgroundColor: "#2D3748",
                        color: "white",
                        marginLeft: "10px",
                        padding: "5px 20px",
                      }}
                    >
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>
                        Today{football.categories} Fixtures
                      </PopoverHeader>
                      {content ? (
                        <PopoverBody
                          fontSize={13}
                          style={{
                            padding: "10px 0px",
                            lineHeight: "30px",
                            fontSize: "15px",
                            cursor: "pointer",
                          }}
                        >
                          <ul>
                            {show && (
                              <small style={{ fontSize: "13px", color: "red" }}>
                                "This Match is Not yet Streaming"
                              </small>
                            )}
                            <p onClick={handleClick}>
                              {fixture1}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date}
                              </span>
                            </p>
                            <p onClick={handleClick}>
                              {fixture2}{" "}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date1}
                              </span>
                            </p>
                            <p onClick={handleClick}>
                              {fixture3}{" "}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date2}
                              </span>
                            </p>
                            <p onClick={handleClick}>
                              {fixture4}{" "}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date3}
                              </span>
                            </p>
                            <p onClick={handleClick}>
                              {fixture5}{" "}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date4}
                              </span>
                            </p>
                            <p onClick={handleClick}>
                              {fixture6}{" "}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date5}
                              </span>
                            </p>
                            <p onClick={handleClick}>
                              {fixture7}{" "}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date6}
                              </span>
                            </p>
                            <p onClick={handleClick}>
                              {fixture9}{" "}
                              <span
                                style={{
                                  marginLeft: "65px",
                                  fontSize: "12px",
                                }}
                              >
                                {date7}
                              </span>
                            </p>
                          </ul>
                        </PopoverBody>
                      ) : (
                        "No Fixtures Available Today"
                      )}
                      <PopoverFooter display="flex" justifyContent="flex-end">
                        <ButtonGroup size="sm">
                          <Button
                            variant="outline"
                            onClick={onClose}
                            ref={initRef}
                          >
                            Close
                          </Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </>
                )}
              </Popover>
            </Box>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Volleyball;
