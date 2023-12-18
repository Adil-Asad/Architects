import React, { useState } from "react";

const Bond = () => {
  const [name, setName] = useState("Bond");

  function handleChange() {
    setName("James Bond");
  }

  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={handleChange}>Click me!</button>
    </div>
  );
};

export default Bond;
