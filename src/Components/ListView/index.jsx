import React from "react";
import { ListItem, H3 } from "../../Components";

// Gonna take service type (i.e. hair) and array of salons as prop
const ListView = ({ timeSlots }) => {
  console.log("timeSlots from listview:", timeSlots);

  const serviceType = timeSlots[0].salon.service;
  return (
    <>
      <header>
        <div>icon</div>
        <H3>{serviceType}</H3>
        <div>Filter icon</div>
      </header>
      <main>
        <div>filter</div>
        <ul>
          {timeSlots.map((timeSlot, index) => (
            <ListItem key={index} timeSlot={timeSlot} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default ListView;
