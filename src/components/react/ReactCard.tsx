import React from "react";

const ReactCard = () => {
  const handleClick = () => {
    console.log("Anchor clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Anchor tag here</button>
    </div>
  );
};

export default ReactCard;
