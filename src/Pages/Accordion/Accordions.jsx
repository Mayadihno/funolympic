import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import data from "./accorData";
import "./Accordion.css";

const Accordions = () => {
  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion__content">
          <div className="accordion__heading">
            <h1>Frequently asked questions</h1>
          </div>
          <div className="accordionBody">
            {data.map((data) => {
              return (
                <Accordion allowMultiple pb={4} key={data.id}>
                  <AccordionItem className="accordionItem">
                    {({ isExpanded }) => (
                      <>
                        <div className="" key={data.id}>
                          <h5>
                            <AccordionButton style={{ color: "black" }}>
                              <Box as="span" flex="1" textAlign="left">
                                <h4> {data.title}</h4>
                              </Box>
                              {isExpanded ? (
                                <BiMinus fontSize={30} />
                              ) : (
                                <BsPlus fontSize={30} />
                              )}
                            </AccordionButton>
                          </h5>
                          <AccordionPanel
                            pb={4}
                            pt={10}
                            style={{ color: "black" }}
                          >
                            <p> {data.words}</p>
                          </AccordionPanel>
                        </div>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordions;
