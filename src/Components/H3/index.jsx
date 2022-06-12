import { StyledH3 } from "./styled";

const H3 = ({ style, children }) => {
  return <StyledH3 style={style}>{children}</StyledH3>;
};

export default H3;
