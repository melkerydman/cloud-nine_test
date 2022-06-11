import styled from "styled-components";

export const StyledP1 = styled.p`
  font-weight: ${(props) => (props.bold ? "400" : "300")};
  font-size: var(--fs-p1);
  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight : "var(--lh-3)"};
  /* line-height: var(--lh-3); */
`;
