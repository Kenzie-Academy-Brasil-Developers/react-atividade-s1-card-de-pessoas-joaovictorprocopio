import React from "react";

const DevList = ({ name, age, country }) => {
  return (
    <>
      <h2 className="name">Dev: {name}</h2>
      <p className="age">Idade: {age}</p>
      <p className="country">País: {country}</p>
    </>
  );
};

export default DevList;
