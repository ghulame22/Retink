import React from "react";

function Card2({ card2Api }) {
  return (
    <div className="cardicon">
      <img src={card2Api?.firstContent} />
      <span>{card2Api?.secondContent}</span>
      <span>
      {card2Api?.thirdContent}
      </span>
    </div>
  );
}

export default Card2;
