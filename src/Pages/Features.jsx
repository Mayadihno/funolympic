import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import data from "./featuresData";
import "./Features.css";
import Gif from "./Gif";
import image from "../assets/Basketball4.gif";

const Features = () => {
  const [expanded, setExpanded] = useState(false);
  const dataToDisplay = expanded ? data : data.slice(0, 6);
  return (
    <React.Fragment>
      <div className="features">
        <div className="features__content">
          <div className="features__headings">
            <h1>Olympic Channel</h1>
            <h6>
              Watch live action from your favourite sports, discover
              award-winning Original Films and Series and explore our 24/7
              thematic linear channels.
            </h6>
            <Gif image={image} />
          </div>
          <div className="features__card-head">
            <h3>Featured Events</h3>
          </div>
          <div className="features__grid">
            <div className="features__card">
              {dataToDisplay.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <Card maxW="md" className="card__bg">
                      <CardHeader>
                        <Flex
                          justifyContent={"space-between"}
                          alignItems="center"
                          spacing="4"
                        >
                          <Box>
                            <Text>{item.name}</Text>
                          </Box>
                          <Avatar src={item.flyer} />
                        </Flex>
                      </CardHeader>
                      <CardBody>
                        <Text mb={"10px"}>{item.date}</Text>
                        <Heading fontSize={"35px"}>{item.topic}</Heading>
                      </CardBody>
                      <Image
                        objectFit="cover"
                        src={item.image}
                        alt="Sport image"
                      />
                    </Card>
                  </div>
                );
              })}
            </div>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                type="button"
                variant={"solid"}
                colorScheme={"messenger"}
                sx={{ padding: "8px 30px" }}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show Less" : "Show More"}
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
