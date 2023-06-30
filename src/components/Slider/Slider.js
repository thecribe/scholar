import React from "react";

import SliderContent from "./SliderContent";
import { useState } from "react";
import { useEffect } from "react";

const Slider = ({ profile, duration }) => {
  const [slideIndex, setSliderIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  let SliderDisplay;

  useEffect(() => {
    setTimeout(() => {
      if (counter < profile.length) {
        setSliderIndex(counter);

        if (counter === profile.length - 1) {
          setCounter(0);
        } else {
          setCounter(counter + 1);
        }
      }
    }, duration * 1000);
  }, [counter]);

  SliderDisplay = profile.map((con, index) => {
    return slideIndex === index && <SliderContent detail={con} key={index} />;
  });
  return <>{SliderDisplay}</>;
};

export default Slider;
