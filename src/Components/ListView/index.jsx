import React from "react";

// Gonna take service type (i.e. hair) and array of salons as prop
const ListView = ({ service, salons }) => {
  return (
    <>
      <header>
        <div>icon</div>
        <h1>{service}</h1>
        <div>Filter icon</div>
      </header>
      <main>
        <div>filter</div>
        <ul>
          {salons.map((salon, index) => (
            <li key={index}>{salon.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ListView;
