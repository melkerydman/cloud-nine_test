import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// This page should import the ListView an fill it with data based on url param
const SpecificServicePage = () => {
  const [salons, setSalons] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getSalons = async () => {
      try {
        const data = await fetch("/data.json");
        const json = await data.json();

        // Get all salons where their service matches the param from url i.e. hair
        const filteredSalons = json.salons.filter((salon) => {
          return salon.service === params.service;
        });

        if (filteredSalons.length === 0) {
          console.log("No match, should redirect to page cannot be found");
        }
        setSalons(filteredSalons);
      } catch (err) {
        console.log(err);
      }
    };
    getSalons();
  }, [params]);

  return (
    <ul>
      {salons.map((salon, index) => {
        return <li key={index}>{salon.service}</li>;
      })}
    </ul>
  );
};

export default SpecificServicePage;
