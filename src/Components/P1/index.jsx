import { StyledP1 } from "./styled";

const P1 = ({ bold, lineHeight, children }) => {
  return (
    <StyledP1 bold={bold} lineHeight={lineHeight}>
      {children}
    </StyledP1>
  );
};

export default P1;
