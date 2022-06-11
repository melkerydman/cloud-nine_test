import React, { useState, useEffect } from "react";

// This page should import the ListView an fill it with data based on salonType
// Should get passed a "salonType"
const SpecificServicePage = ({ salonType }) => {
  const [salons, setSalons] = useState([]);
  useEffect(() => {
    const getSalons = async () => {
      try {
        const data = await fetch("./data.json");
        const json = await data.json();

        // Get all salons where their service matches the prop passed i.e. hair salons
        const filteredSalons = json.salons.filter(
          (salon) => salon.service === salonType
        );
        setSalons(filteredSalons);
      } catch (err) {
        console.log(err);
      }
    };
    getSalons();
  }, []);

  console.log(salons);
  return (
    <ul>
      {salons.map((salon, index) => {
        return <li key={index}>{salon.service}</li>;
      })}
    </ul>
  );
};

export default SpecificServicePage;
