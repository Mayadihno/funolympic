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
  "https://images.pexels.com/photos/4761671/pexels-photo-4761671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Boxing = () => {
  const [football, setFootball] = useState([]);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(false);
  const initRef = useRef();

  const getCategories = async () => {
    const collectionRef = collection(db, "fixtures");
    const q = query(
      collectionRef,
      where("categories", "==", "Boxing"),
      orderBy("id", "desc")
    );
    const querySnapshot = await getDocs(q);
    const queryData = querySnapshot.docs.map((doc) => doc.data());
    setFootball(queryData);
    setContent(true);
  };

  const handleClick = () => {
    setShow(!show);
  };

  const fixture1 = football[0]?.matchFixtures;
  const fixture2 = football[1]?.matchFixtures;
  const fixture3 = football[2]?.matchFixtures;
  const fixture4 = football[3]?.matchFixtures;
  const fixture5 = football[4]?.matchFixtures;
  const fixture6 = football[5]?.matchFixtures;
  const fixture7 = football[6]?.matchFixtures;
  const fixture8 = football[8]?.matchFixtures;
  const fixture9 = football[9]?.matchFixtures;
  const fixture10 = football[10]?.matchFixtures;
  const fixture11 = football[11]?.matchFixtures;
  const fixture12 = football[12]?.matchFixtures;
  const fixture13 = football[13]?.matchFixtures;
  const fixture14 = football[14]?.matchFixtures;
  const fixture15 = football[15]?.matchFixtures;
  const fixture16 = football[16]?.matchFixtures;
  const fixture17 = football[17]?.matchFixtures;
  const fixture18 = football[18]?.matchFixtures;
  const fixture19 = football[19]?.matchFixtures;
  const fixture20 = football[20]?.matchFixtures;
  const fixture21 = football[21]?.matchFixtures;
  const fixture22 = football[22]?.matchFixtures;
  const fixture23 = football[23]?.matchFixtures;
  const fixture24 = football[24]?.matchFixtures;
  // const fixture25 = football[25]?.matchFixtures;
  // const fixture26 = football[26]?.matchFixtures;
  // const fixture27 = football[27]?.matchFixtures;
  // const fixture28 = football[28]?.matchFixtures;
  // const fixture29 = football[29]?.matchFixtures;
  // const fixture30 = football[30]?.matchFixtures;

  useEffect(() => {
    getCategories();
  }, []);

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
                            <p onClick={handleClick}>{fixture1}</p>
                            <p onClick={handleClick}>{fixture2}</p>
                            <p onClick={handleClick}>{fixture3}</p>
                            <p onClick={handleClick}>{fixture4}</p>
                            <p onClick={handleClick}>{fixture5}</p>
                            <p onClick={handleClick}>{fixture6}</p>
                            <p onClick={handleClick}>{fixture7}</p>
                            <p onClick={handleClick}>{fixture9}</p>
                            <p onClick={handleClick}>{fixture10}</p>
                            <p onClick={handleClick}>{fixture8}</p>
                            <p onClick={handleClick}>{fixture11}</p>
                            <p onClick={handleClick}>{fixture12}</p>
                            <p onClick={handleClick}>{fixture13}</p>
                            <p onClick={handleClick}>{fixture14}</p>
                            <p onClick={handleClick}>{fixture15}</p>
                            <p onClick={handleClick}>{fixture16}</p>
                            <p onClick={handleClick}>{fixture17}</p>
                            <p onClick={handleClick}>{fixture18}</p>
                            <p onClick={handleClick}>{fixture19}</p>
                            <p onClick={handleClick}>{fixture20}</p>
                            <p onClick={handleClick}>{fixture21}</p>
                            <p onClick={handleClick}>{fixture23}</p>
                            <p onClick={handleClick}>{fixture24}</p>
                            {/* <p onClick={handleClick}>{fixture25}</p>
                            <p onClick={handleClick}>{fixture25}</p>
                            <p onClick={handleClick}>{fixture26}</p>
                            <p onClick={handleClick}>{fixture27}</p>
                            <p onClick={handleClick}>{fixture28}</p>
                            <p onClick={handleClick}>{fixture29}</p>
                            <p onClick={handleClick}>{fixture30}</p> */}
                            <p onClick={handleClick}>{fixture22}</p>
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

export default Boxing;
