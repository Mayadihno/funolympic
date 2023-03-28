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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import data from "./fixturesData";
import "./Fixtures.css";
import Popup from "../../Components/Popup";

const Fixtures = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const initRef = useRef();

  return (
    <React.Fragment>
      <div className="fixtures">
        <div className="fixtures__content">
          <div className="features__text">
            <h3>Today Fixtures</h3>
          </div>
          <div className="fixtures__grid">
            {data.map((items) => {
              return (
                <div
                  className="card-grid"
                  key={items.id}
                  style={{ marginTop: "30px" }}
                >
                  <Card maxW="md" className="card__bg">
                    <Image
                      objectFit="cover"
                      src={items.image}
                      alt="SportImage"
                      position={"relative"}
                    />
                    <div
                      className="text"
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
                      <h3
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "500",
                          color: "white",
                        }}
                      >
                        {items.sport}
                      </h3>
                    </div>
                    <CardBody>
                      <Box>
                        <Popover
                          closeOnEsc
                          initialFocusRef={initRef}
                          style={{ backgroundColor: "red", color: "white" }}
                          // className="card__bg"
                        >
                          {({ onClose }) => (
                            <>
                              <PopoverTrigger>
                                <Button colorScheme={"red"}>
                                  See {items.sport} Fixtures
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent
                                style={{
                                  backgroundColor: "#2D3748",
                                  color: "white",
                                  marginLeft: "30px",
                                  padding: "5px 20px",
                                }}
                              >
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>
                                  Today {items.sport} Fixtures
                                </PopoverHeader>
                                <PopoverBody
                                  fontSize={13}
                                  style={{
                                    padding: "10px 0px",
                                    lineHeight: "30px",
                                    fontSize: "15px",
                                  }}
                                >
                                  {items.fixtures}
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
              );
            })}
          </div>
          <Popup isopen={isOpen} onclose={onClose} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Fixtures;
