import React, { useEffect, useState } from "react";

const QueryFnBehaiviors = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    asynchronousTestsFn().then((reponse) => {
      setItems(reponse);
    });
  }, []);

  const asynchronousTestsFn = () => {
    return Promise.resolve([{ name: "vladi", age: "25" }]);
  };

  return (
    <ul>
      {items &&
        items.map((item) => (
          <li key={item.name} aria-label={item.name}>
            {item.name}, {item.age}
          </li>
        ))}
      <li>Red</li>
      <li>Blue</li>
      <li>Green</li>
    </ul>
  );
};

export default QueryFnBehaiviors;
