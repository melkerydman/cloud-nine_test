import React from "react";
import { Flex, H4, P1, P2, P3 } from "../../Components";
import { StyledListItem } from "./styled";

const ListItem = ({ timeSlot }) => {
  console.log(timeSlot);
  return (
    <StyledListItem>
      <P1 bold>{timeSlot.time}</P1>
      <Flex column flex>
        <H4>{timeSlot.salon.name}</H4>
        <Flex>
          <div>stars</div>
          <P3>(21)</P3>
        </Flex>
        <P1>{timeSlot.salon.address.street}</P1>
      </Flex>
      <Flex column>
        <P1 bold>${timeSlot.price}</P1>
        <P2>{timeSlot.duration} min</P2>
      </Flex>
      <div>icon</div>
    </StyledListItem>
  );
};

export default ListItem;
