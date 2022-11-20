import React from "react";
import Card from "../card/Card";
import TopicWrapper from "./topic.styles";

const Topic = () => {
  return (
    <>
      <TopicWrapper>
        <div className="container">
          <h1>Select a topic</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <Card />
      </TopicWrapper>
        
    </>
  );
};

export default Topic;
