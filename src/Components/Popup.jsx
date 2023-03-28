import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import data from "../Home/Fixtures/fixturesData";

const Popup = ({ isopen, onclose }) => {
  return (
    <React.Fragment>
      <div className="popup">
        {data.map((data, index) => {
          return (
            <div key={index}>
              {data.id === index && (
                <Modal isOpen={isopen} onClose={onclose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{data.sport}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <h3>{data.fixtures}</h3>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onclose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              )}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Popup;
