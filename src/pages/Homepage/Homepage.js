import React from "react";
import { HomepageStyled } from "./HomepageStyled";
import { SectionStyled } from "../../ReuseableStyles";
import Slider from "../../components/Slider/Slider";
import { useTheme } from "styled-components";
import About from "./About";
import Staff from "./Staff";
import Student from "./Student";
import Research from "./Research";
import LatestBlog from "./LatestBlog";
import { useLoaderData } from "react-router";

const Homepage = () => {
  const loader = useLoaderData();
  const theme = useTheme();
  const profiles = [
    {
      background: "./logo192.png",
      header_text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, est?",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, mollitia sequi est provident veritatis quod deserunt commodi tenetur temporibus expedita debitis cumque ex qui esse.",
      profile_img: "./profile/philip.jpg",
    },
    {
      background: "./profile/philip.jpg",
      header_text:
        "2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, est?",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, mollitia sequi est provident veritatis quod deserunt commodi tenetur temporibus expedita debitis cumque ex qui esse.",
      profile_img: "./profile/philip.jpg",
    },
    {
      background: "./logo192.png",
      header_text:
        "3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, est?",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, mollitia sequi est provident veritatis quod deserunt commodi tenetur temporibus expedita debitis cumque ex qui esse.",
      profile_img: "./profile/philip.jpg",
    },
  ];

  console.log(loader);

  return (
    <HomepageStyled>
      <SectionStyled className="slider">
        <Slider profile={profiles} duration={5} />
      </SectionStyled>
      <SectionStyled padding="4rem 0rem" className="about">
        <About />
      </SectionStyled>
      <SectionStyled padding="10rem 0rem" className="staff">
        <Staff />
      </SectionStyled>
      <SectionStyled padding="4rem 0rem" className="student">
        <Student />
      </SectionStyled>
      <SectionStyled padding="10rem 0rem" className="research">
        <Research />
      </SectionStyled>
      <SectionStyled padding="4rem 0rem" className="latestblog">
        <LatestBlog />
      </SectionStyled>
    </HomepageStyled>
  );
};

export default Homepage;

export const loader = () => {
  console.log("first laod");
  return true;
};
