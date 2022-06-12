import { useState } from "react";
import { Flex, Icon } from "../../Components";
import { Range } from "./styled";

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
  // const [min, setMin] = useState();
  // const [max, setMax] = useState();

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
          <div>
            Price {console.log(selectedOption.from)}${selectedOption.from} - $
            {selectedOption.to}
          </div>
        </Flex>
        <button onClick={handleOpen}>
          <Icon icon="chevron_down" size="16" color="var(--clr-accent)" />
        </button>
      </Flex>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            handleSelect(option);
          }}
        >
          {option.from}-{option.to}
        </div>
      ))}
      <Range isOpen={isOpen}>
        <input type="number" placeholder="1" min="1" max="250" />
        <input type="number" placeholder="250" />
      </Range>
    </div>
  );
};

export default Filter;
