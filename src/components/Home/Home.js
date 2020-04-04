import React from "react";
import FurKid from "./FurKid/FurKid";
import classes from "./Home.module.css";
import Heart from "../../assets/images/Heart.png";

const home = props => {
  let transformedFurKid = Object.keys(props.furKid)
    .map(furKidKey => {
      return [...Array(props.furKid[furKidKey])].map((_, i) => {
        return <FurKid key={furKidKey + i} type={furKidKey} />;
      });
    })
    .reduce((arr, b) => {
      return arr.concat(b);
    }, []);

  //Array(_) is to get the empty spaces, the length, lay out the empty spaces in an array with ... (spread operator)
  //[_ _], [_ _ _]
  //concat [_ _ _ _ _]

  if (transformedFurKid.length === 0) {
    transformedFurKid = (
      <p className={classes.BringHome}>
        {" "}
        Please bring home some{" "}
        <img src={Heart} alt="heart" style={{ height: "1em" }} /> with you{" "}
      </p>
    );
  }

  return (
    <div className={classes.Home}>
      <FurKid type="roof" />
      <FurKid type="styling" />
      {transformedFurKid}
    </div>
  );
};

export default home;
