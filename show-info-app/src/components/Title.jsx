import React from "react";

const Title = ({ name, date }) => {
  return (
    <div className="title">
      <h1>{name}</h1>
      <h2>{date}</h2>
    </div>
  );
};

export default Title;
