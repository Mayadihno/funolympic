import { Button } from "@chakra-ui/react";
import React from "react";
import Gif from "./Gif";
import "./Medal.css";
import image from "../assets/FinishLine.gif";
const Medal = () => {
  return (
    <React.Fragment>
      <div className="medal">
        <div className="medal__content">
          <div className="medal__flex">
            <div className="medal__image">
              <img
                src="https://gstatic.olympics.com/s1/t_16-9_760/f_auto/static/pastgames/disciplines-medal.png"
                alt="medalimage"
              />
            </div>
            <div className="medal__text">
              <h1>Medal Table</h1>
              <p>See the list of teams and medals won by each.</p>
              <Button
                size="md"
                height="48px"
                width="400px"
                colorScheme="twitter"
                variant={"solid"}
              >
                See Table
              </Button>
              <div className="img__medal">
                <Gif image={image} />
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="section__background">
            <div className="section__flex">
              <div className="section__image">
                <img
                  src="https://img.olympicchannel.com/images/image/private/t_hp_signup/f_auto/v1538355600/primary/lys8hqttmonkqqpo8dmb"
                  alt=""
                />
              </div>
              <div className="section__text">
                <h4>Personalise your Olympic experience</h4>
                <p>
                  Stay up to date on your favourite sports and athletes. Watch
                  original Olympic films and documentaries. Get exclusive
                  stories about your favourite Olympic athletes and sports into
                  your e-mail inbox.
                </p>
                <div className="button">
                  <Button colorScheme="gray">Sign Up Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Medal;
