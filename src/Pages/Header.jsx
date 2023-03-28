import React from "react";
import "./Header.css";
import { Button } from "@chakra-ui/react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header__content">
          <h3>Enter the world of Olympic Esports</h3>
          <div className="buttons">
            <Button
              rightIcon={<HiOutlineArrowLongRight />}
              colorScheme="twitter"
              variant="solid"
            >
              Learn More
            </Button>
            <Button
              rightIcon={<HiOutlineArrowLongRight />}
              colorScheme="twitter"
              variant="outline"
            >
              olympic Esport Series
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
