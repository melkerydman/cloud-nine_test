import { Icon, P2, P3 } from "../../Components";
import { StyledReview } from "./styled";

const Review = ({ lg, reviews }) => {
  console.log("reviews", reviews);
  const stars = [];
  for (let i = 1; i < 6; i++) {
    if (i <= reviews.stars) {
      stars.push(
        <Icon
          key={i}
          color="var(--clr-accent)"
          size={lg ? "16" : "12"}
          icon="star_filled"
        />
      );
    } else {
      stars.push(
        <Icon
          key={i}
          color="var(--clr-white)"
          size={lg ? "16" : "12"}
          icon="star_empty"
          stroke="var(--clr-accent)"
          strokeWidth="0.5"
        />
      );
    }
  }

  if (lg) {
    return (
      <StyledReview>
        <div style={{ display: "flex" }}>{stars.map((star) => star)}</div>
        <P2>{reviews.totalReviews}</P2>
      </StyledReview>
    );
  } else {
    return (
      // <StyledReview>Review</StyledReview>
      <StyledReview>
        <div style={{ display: "flex" }}>{stars.map((star) => star)}</div>
        <P3>{reviews.totalReviews}</P3>
      </StyledReview>
    );
  }
};

export default Review;
