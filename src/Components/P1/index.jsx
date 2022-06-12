import { StyledP1 } from "./styled";

const P1 = ({ bold, style, children }) => {
  return (
    <StyledP1 style={style} bold={bold}>
      {children}
    </StyledP1>
  );
};

export default P1;
