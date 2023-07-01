import React from "react";
import { CenterDiv } from "../../ReuseableStyles";
import Card from "../../components/Card/Card";

const LatestBlog = () => {
  return (
    <CenterDiv className="inner-div">
      <div className="header-box">
        <h3 className="section-header-text">Blog</h3>
        <h2 className="header-text">Latest from Staff and Students</h2>
      </div>
      <div className="content-box">
        <div className="card-container">
          <Card dimension={{ width: "100%", height: "100%" }} padding="2rem">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              atque sed dignissimos, aliquid praesentium, libero impedit
              laudantium ratione nobis consequatur dolorem quae ipsum a
              distinctio, vero aperiam maiores sapiente quos molestiae modi
              dolorum. Debitis repellendus quod consequuntur saepe mollitia
              itaque ex eligendi adipisci numquam odit, neque nam esse,
              similique sunt!
            </p>
          </Card>
        </div>
        <div className="card-container">
          <Card dimension={{ width: "100%", height: "100%" }} padding="2rem">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis atque
            sed dignissimos, aliquid praesentium, libero impedit laudantium
            ratione nobis consequatur dolorem quae ipsum a distinctio, vero
            aperiam maiores sapiente quos molestiae modi dolorum. Debitis
            repellendus quod consequuntur saepe mollitia itaque ex eligendi
            adipisci numquam odit, neque nam esse, similique sunt!
          </Card>
        </div>
        <div className="card-container">
          <Card dimension={{ width: "100%", height: "100%" }} padding="2rem">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis atque
            sed dignissimos, aliquid praesentium, libero impedit laudantium
            ratione nobis consequatur dolorem quae ipsum a distinctio, vero
            aperiam maiores sapiente quos molestiae modi dolorum. Debitis
            repellendus quod consequuntur saepe mollitia itaque ex eligendi
            adipisci numquam odit, neque nam esse, similique sunt!
          </Card>
        </div>
        <div className="card-container">
          <Card dimension={{ width: "100%", height: "100%" }} padding="2rem">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis atque
            sed dignissimos, aliquid praesentium, libero impedit laudantium
            ratione nobis consequatur dolorem quae ipsum a distinctio, vero
            aperiam maiores sapiente quos molestiae modi dolorum. Debitis
            repellendus quod consequuntur saepe mollitia itaque ex eligendi
            adipisci numquam odit, neque nam esse, similique sunt!
          </Card>
        </div>
      </div>
      ;
    </CenterDiv>
  );
};

export default LatestBlog;
