import React, { useState } from "react";

const Criteria = () => {
  const [email, setEmail] = useState("dadadad@gmail.com");
  return (
    <form>
      <h3>Enter Data</h3>
      <div data-testid="image wrapper">
        <img src="data" alt="data.jpg" />
      </div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="color">Color</label>
      <input id="color" placeholder="Red" />
      <button title="Click ready to submit">Submit</button>
    </form>
  );
};

export default Criteria;
