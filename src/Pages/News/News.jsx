import React from "react";
import "./News.css";
import data from "./newsData";
import { Card, CardBody, Flex, Image, Link } from "@chakra-ui/react";
import SwipperMobile from "./SwipperMobile";

const News = () => {
  return (
    <React.Fragment>
      <div className="news">
        <div className="news__content">
          <div className="news__heading">
            <h3>latest News</h3>
          </div>
          <div className="swipperClass">
            <SwipperMobile />
          </div>
          <div className="news__grid">
            {data.map((item) => {
              return (
                <Card key={item.id} maxW="md" className="card__bg">
                  <Image
                    objectFit="cover"
                    height={"200px"}
                    src={item.image}
                    alt="Sport image"
                    className="newsImage"
                  />
                  <CardBody className="newsBody">
                    <Flex
                      justifyContent={"space-between"}
                      alignItems="center"
                      p={"2px 0px 20px 0px"}
                    >
                      <h4>{item.sport}</h4>
                      <h5>{item.time}</h5>
                    </Flex>
                    <Link className="link">
                      <p>{item.link}</p>
                    </Link>
                    <div className="content">
                      <p>{item.content}</p>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default News;
