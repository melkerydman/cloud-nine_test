import React from "react";
import { Icon, P1 } from "../../../Components";
import { StyledInfo } from "./styled";

const Item = ({ icon, extend, content }) => {
  return (
    <StyledInfo>
      <Icon icon={icon} size="16" color="var(--clr-accent)" />
      <P1>{content}</P1>
      {extend ? <Icon icon={extend} size="16" color="var(--clr-accent)" /> : ""}
    </StyledInfo>
  );
};

export default Item;
