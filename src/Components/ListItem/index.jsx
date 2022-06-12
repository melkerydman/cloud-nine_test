import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, H4, P1, P2, Icon, Divider, Review } from "../../Components";
import { StyledListItem } from "./styled";

const ListItem = ({ timeSlot }) => {
  const navigate = useNavigate();
  const stars = [];
  for (let i = 1; i < 6; i++) {
    if (i <= timeSlot.salon.reviews.stars) {
      stars.push(
        <Icon key={i} color="var(--clr-accent)" size="12" icon="star_filled" />
      );
    } else {
      stars.push(
        <Icon
          key={i}
          color="var(--clr-white)"
          size="12"
          icon="star_empty"
          stroke="var(--clr-accent)"
          strokeWidth="0.5"
        />
      );
    }
  }
  return (
    <StyledListItem
      onClick={() => {
        navigate(`../salons/${timeSlot.salon.name}`, { replace: true });
      }}
    >
      <P1 bold>{timeSlot.time}</P1>
      <Flex column flex>
        <H4>{timeSlot.salon.name}</H4>
        <Review reviews={timeSlot.salon.reviews} />
        <P1>{timeSlot.salon.address.street}</P1>
      </Flex>
      <Flex style={{ textAlign: "right" }} column>
        <P1 bold>${timeSlot.price}</P1>
        <P2>{timeSlot.duration} min</P2>
      </Flex>
      <Icon
        style={{ alignSelf: "center" }}
        color="var(--clr-accent)"
        size="16"
        icon="chevron_right"
      />
      <Divider />
    </StyledListItem>
  );
};

export default ListItem;
