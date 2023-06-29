import React from "react";
import { FooterStyled } from "./FooterStyled";
import { CenterDiv, ImgStyle } from "../ReuseableStyles";

const Footer = () => {
  return (
    <FooterStyled>
      <CenterDiv>
        <div className="inner-div">
          <div className="footer-text">
            <div className="about">
              <div className="about-img">
                <ImgStyle src="./logo192.png" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quibusdam quasi optio exercitationem corrupti fugiat, aliquid id
                distinctio ipsum voluptates fuga itaque error doloribus
                voluptatum ducimus nostrum adipisci asperiores sapiente!
              </p>
            </div>
            <div className="widget-box">
              <div className="widget">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>

              <div className="widget">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="widget">
                <h3>Lorem, ipsum.</h3>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              explicabo.
            </p>
          </div>
        </div>
      </CenterDiv>
    </FooterStyled>
  );
};

export default Footer;
