import React from "react";

function Card({cardApi}) {
  return (
    <>
      <div className="cardmain">
        <img src={cardApi?.firstContent} alt="icon" />
        <span>{cardApi?.secondContent}</span>
        <span>{cardApi?.thirdContent}</span>
      </div>
    </>
  );
}

export default Card;
