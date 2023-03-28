import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ msg }) => {
  return (
    <React.Fragment>
      <div className="spinner">
        <Flex
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          height="full"
          px={10}
        >
          <Circles width={80} height={80} color="#008fff" />
          <Text fontSize={25} textAlign="center" px={2} color="black">
            {msg}
          </Text>
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
