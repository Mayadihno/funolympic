import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Streammer.css";
import AdminLogin from "../Components/AdminLogin";

const Streamer = () => {
  const [admin, setadmin] = useState(false);
  const [other, setOther] = useState(true);
  const navigate = useNavigate();
  const handleLocal = (e) => {
    e.preventDefault();
    navigate("/phone-auth", { replace: true });
  };
  const handleInter = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };
  const handleAdmin = () => {
    setadmin(true);
    setOther(false);
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
            {other ? (
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
                      <Stack direction="row" spacing={1}>
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
                        <Button
                          onClick={handleAdmin}
                          colorScheme="teal"
                          variant="outline"
                        >
                          Login as admin
                        </Button>
                      </Stack>
                    </Flex>
                  </CardBody>
                </Card>
              </div>
            ) : (
              <AdminLogin />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Streamer;
