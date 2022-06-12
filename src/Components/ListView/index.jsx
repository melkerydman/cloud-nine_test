import { useState } from "react";
import { ListItem, H3, Flex, Icon, Filter } from "../../Components";

const ListView = ({ timeSlots }) => {
  const serviceType = timeSlots[0].salon.service;
  const [selectedOption, setSelectedOption] = useState({ from: 1, to: 15 });

  // Update selected price range option
  const handleSelect = (option) => {
    setSelectedOption({ from: option.from, to: option.to });
  };

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
        <Filter
          selectedOption={selectedOption}
          handleSelect={handleSelect}
        ></Filter>
        <ul>
          {timeSlots.map((timeSlot, index) => {
            if (
              timeSlot.price >= selectedOption.from &&
              timeSlot.price <= selectedOption.to
            ) {
              return <ListItem key={index} timeSlot={timeSlot} />;
            } else return "";
          })}
        </ul>
      </main>
    </>
  );
};

export default ListView;
