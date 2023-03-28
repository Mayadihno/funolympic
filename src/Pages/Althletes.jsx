import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import data from "./sport";
import "./althletes.css";
const Althletes = () => {
  return (
    <React.Fragment>
      <div className="sportman">
        <div className="sportman__content">
          <div className="sportman__text">
            <h2>Featured Athletes</h2>
          </div>
          <div className="sportman__grid">
            {data.map((item) => {
              return (
                <div className="card-data" key={item.id}>
                  <Card maxW="sm" className="card__bg">
                    <CardBody>
                      <Image
                        src={item.image}
                        alt={item.name}
                        borderRadius="lg"
                        objectFit={"cover"}
                      />
                      <Stack mt="2">
                        <Text color="white" fontSize="20px" pt={3}>
                          {item.name}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter className="footer-card">
                      <h4>{item.sport}</h4>
                      <div className="card-body-flex">
                        <Avatar src={item.logo} />
                        <Text ml={3}>{item.country}</Text>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Althletes;
