import styled from "styled-components";

export const Range = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
