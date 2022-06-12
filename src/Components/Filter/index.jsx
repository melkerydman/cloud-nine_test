import { useState } from "react";
import { Flex, Icon } from "../../Components";
import { Range } from "./styled";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      style={{
        padding: "var(--gutter-md)",
        borderTop: "solid .5px var(--clr-accent)",
        borderBottom: "solid .5px var(--clr-accent)",
      }}
    >
      <Flex
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex>
          <div>Price</div>
          <div>$100</div>-<div>$200</div>
        </Flex>
        <button onClick={handleOpen}>
          <Icon icon="chevron_down" size="16" color="var(--clr-accent)" />
        </button>
      </Flex>
      <Range isOpen={isOpen}>
        <input type="number" placeholder="1" />
        <input type="number" placeholder="250" />
      </Range>
    </div>
  );
};

export default Filter;
