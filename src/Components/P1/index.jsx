import { StyledP1 } from "./styled";

const P1 = ({ bold, lineHeight, style, children }) => {
  return (
    <StyledP1 style={style} bold={bold} lineHeight={lineHeight}>
      {children}
    </StyledP1>
  );
};

export default P1;
