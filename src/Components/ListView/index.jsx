import React from "react";
import { ListItem, H3, Flex, Icon } from "../../Components";

const ListView = ({ timeSlots }) => {
  const serviceType = timeSlots[0].salon.service;

  return (
    <>
      <header style={{ padding: "var(--gutter-md)" }}>
        <Flex style={{ justifyContent: "space-between" }}>
          <Icon icon="chevron_left" size="24" color="var(--clr-accent)" />
          <H3>{serviceType}</H3>
          <Icon icon="settings" size="24" color="var(--clr-accent)" />
        </Flex>
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
