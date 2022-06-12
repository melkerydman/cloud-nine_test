import styled from "styled-components";

export const Dropdown = styled.ul`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  list-style: none;
`;
export const DropdownOption = styled.li`
  position: relative;
  padding-top: var(--gutter-sm);
  padding-bottom: var(--gutter-sm);
`;
