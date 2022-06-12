import { useState } from "react";
import { Flex, Icon, Divider, P1, P2 } from "../../Components";
import { Dropdown, DropdownOption } from "./styled";

const Filter = ({ selectedOption, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(selectedOption);

  // Dropdown options
  const options = [
    { from: 1, to: 15 },
    { from: 16, to: 30 },
    { from: 31, to: 45 },
    { from: 46, to: 60 },
  ];

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
        {/* <Flex> */}
        <P1>
          Price {console.log(selectedOption.from)}${selectedOption.from} - $
          {selectedOption.to}
        </P1>
        {/* </Flex> */}
        <button
          style={{
            background: "transparent",
            border: "none",
            margin: "0",
            padding: "0",
          }}
          onClick={handleOpen}
        >
          <Icon
            icon={isOpen ? "chevron_up" : "chevron_down"}
            size="16"
            color="var(--clr-accent)"
          />
        </button>
      </Flex>
      <Dropdown isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownOption
            key={index}
            onClick={() => {
              handleSelect(option);
              handleOpen();
            }}
          >
            <P2>
              ${option.from}-${option.to}
            </P2>
            <Divider style={{ width: "100%", left: "0" }} />
          </DropdownOption>
        ))}
      </Dropdown>
    </div>
  );
};

export default Filter;
