import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex: ${(props) => (props.flex ? "1" : "")};
  flex-direction: ${(props) => (props.column ? "column" : "")};
  gap: var(--gutter-sm);
`;
