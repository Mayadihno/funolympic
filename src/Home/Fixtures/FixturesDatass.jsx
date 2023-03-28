import React from "react";
import "./FixturesData.css";
import Football from "../Sport/Football/Football";
import Tennis from "../Sport/Tennis/Tennis";
import BasketBall from "../Sport/BasketBall/BasketBall";
import Boxing from "../Sport/Boxing/Boxing";
import Cricket from "../Sport/Cricket/Cricket";
import Volleyball from "../Sport/Volleyball/Volleyball";
import Rugby from "../Sport/Rugby/Rugby";
import Swimming from "../Sport/Swimming/Swimming";
import Formular from "../Sport/Formular/Formular";
import Hockey from "../Sport/Hockey/Hockey";
import Baseball from "../Sport/Baseball/Baseball";
import Sailing from "../Sport/Sailing/Sailing";
import Fencing from "../Sport/Fencing/Fencing";
import Judo from "../Sport/Judo/Judo";
import Surfing from "../Sport/Surfing/Surfing";

const FixturesDatass = () => {
  return (
    <React.Fragment>
      <div className="heading">
        <h4>Todays Sport Fixtures</h4>
      </div>
      <div className="fixturesData">
        <div className="fixturesData__content">
          <div className="fixturesData__flex">
            <Football />
            <Tennis />
            <BasketBall />
            <Boxing />
            <Cricket />
            <Volleyball />
            <Rugby />
            <Swimming />
            <Formular />
            <Hockey />
            <Baseball />
            <Sailing />
            <Fencing />
            <Judo />
            <Surfing />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FixturesDatass;
