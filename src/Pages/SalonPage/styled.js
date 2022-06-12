import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9f9f9;
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--gutter-lg);
`;

export const Choice = styled.div`
  padding: var(--gutter-md);
  flex: 1;
  border-bottom: ${(props) =>
    props.active ? "solid 2px var(--clr-accent)" : ""};
`;

export const Top = styled.header`
  background-color: var(--clr-white);
  display: flex;
  text-align: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--clr-white);
`;

export const Description = styled.div`
  padding: var(--gutter-md);
`;
