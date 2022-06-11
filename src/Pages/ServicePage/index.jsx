import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListView } from "../../Components";

// This page should import the ListView an fill it with data based on url param
const ServicePage = () => {
  const [salons, setSalons] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
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

  useEffect(() => {
    setTimeSlots([]);
    salons.forEach((salon) => {
      const timeSlots = salon.availableTimeSlots;
      timeSlots.forEach((timeSlot) => {
        setTimeSlots((prevTimeSlots) => [
          ...prevTimeSlots,
          {
            salon: salon,
            time: timeSlot.time,
            duration: timeSlot.duration,
            price: timeSlot.price,
          },
        ]);
      });
    });
  }, [salons]);
  console.log(timeSlots);
  return (
    <>{timeSlots.length > 0 ? <ListView timeSlots={timeSlots} /> : <></>}</>
  );
};

export default ServicePage;
