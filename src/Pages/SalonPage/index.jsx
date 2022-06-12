import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Divider, Flex, H3, Icon, P1, Review } from "../../Components";
import { InfoWrapper, Info, Description } from "./styled";

const SalonPage = () => {
  const [salon, setSalon] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getSalon = async () => {
      try {
        const data = await fetch("/data.json");
        const json = await data.json();
        // Get salon matching name param from url
        const fetchedSalon = json.salons.filter((salon) => {
          return salon.name === params.name;
        });

        if (fetchedSalon.length === 0) {
          console.log("No match, should redirect to page cannot be found");
        }
        setSalon(...fetchedSalon);
      } catch (err) {
        console.log(err);
      }
    };
    getSalon();
  }, [params]);

  if (Object.keys(salon).length !== 0) {
    console.log(salon);
    return (
      <div style={{ backgroundColor: "#F9F9F9" }}>
        <header
          style={{
            height: "200px",
            paddingLeft: "var(--gutter-md)",
            paddingRight: "var(--gutter-md)",
            paddingTop: "var(--gutter-lg)",
            paddingBottom: "var(--gutter-xl)",
            backgroundImage: "url(/background.png)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Flex style={{ justifyContent: "space-between" }}>
            <button
              onClick={() => {
                navigate(-1);
              }}
            >
              <Icon
                icon="chevron_left"
                size="24"
                color="var(--clr-white)"
              ></Icon>
            </button>
            <button>
              <Icon icon="heart" size="24" color="var(--clr-white)"></Icon>
            </button>
          </Flex>
          <Flex column>
            <H3 style={{ color: "var(--clr-white)" }}>{salon.name}</H3>
            <Review lg reviews={salon.reviews} />
          </Flex>
        </header>
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--gutter-lg)",
          }}
        >
          <header
            style={{
              backgroundColor: "var(--clr-white)",
              display: "flex",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "var(--gutter-md)",
                flex: "1",
                borderBottom: "solid 2px var(--clr-accent)",
              }}
            >
              Info
            </div>
            <div
              style={{
                padding: "var(--gutter-md)",
                flex: "1",
              }}
            >
              Schedule
            </div>
          </header>
          <InfoWrapper>
            <Info>
              <Icon icon="chevron_left" size="16" color="var(--clr-accent)" />
              <P1>
                {salon.address.street}, {salon.address.postalCode}{" "}
                {salon.address.city}
              </P1>
            </Info>
            <Info>
              <Icon icon="hours" size="16" color="var(--clr-accent)" />
              <P1>Open until {salon.openingHours[0].closes} today</P1>
              <Icon icon="chevron_down" size="16" color="var(--clr-accent)" />
            </Info>
            <Info>
              <Icon icon="phone" size="16" color="var(--clr-accent)" />
              <P1>{salon.phoneNumber}</P1>
            </Info>
            <Info>
              <Icon icon="website" size="16" color="var(--clr-accent)" />
              <P1>{salon.website}</P1>
            </Info>
            <Description>
              {salon.description.map((text, index) => (
                <P1 key={index} style={{ lineHeight: "var(--lh-2)" }}>
                  {text}
                </P1>
              ))}
            </Description>
          </InfoWrapper>
        </main>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SalonPage;
