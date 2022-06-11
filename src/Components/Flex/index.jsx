import { StyledFlex } from "./styled";

const Flex = ({ column, flex, children }) => {
  return (
    <StyledFlex column={column} flex={flex}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
