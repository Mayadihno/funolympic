import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Streammer.css";

const Streamer = () => {
  const navigate = useNavigate();
  const handleLocal = (e) => {
    e.preventDefault();
    navigate("/phone-auth", { replace: true });
  };
  const handleInter = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };
  return (
    <React.Fragment>
      <div className="streamer">
        <div className="streamer__content">
          <div className="streamer__flex">
            <div className="streamer__image">
              <img
                src="https://variety.com/wp-content/uploads/2023/01/Collage-Maker-16-Jan-2023-10.00-AM.jpg"
                alt=""
              />
            </div>
            <div className="streamer__card">
              <Card className="streamer__cards">
                <CardHeader>
                  <h4>Streammer Type</h4>
                </CardHeader>
                <CardBody className="streammer__body">
                  <h3>
                    Before You Sign in we need to confirm Your Nationality
                  </h3>
                  <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    pt={"20px"}
                  >
                    <Stack direction="row" spacing={4}>
                      <Button
                        onClick={handleLocal}
                        colorScheme="teal"
                        variant="outline"
                      >
                        Local Streamer
                      </Button>
                      <Button
                        onClick={handleInter}
                        colorScheme="teal"
                        variant="outline"
                      >
                        International Streammer
                      </Button>
                    </Stack>
                  </Flex>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Streamer;
