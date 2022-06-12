import { StyledFlex } from "./styled";

const Flex = ({ style, column, flex, children }) => {
  return (
    <StyledFlex style={style} column={column} flex={flex}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
