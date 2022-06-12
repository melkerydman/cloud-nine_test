import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Divider, Flex, H3, Icon, P1, Review } from "../../Components";
import {
  InfoWrapper,
  Description,
  Main,
  Top,
  Container,
  Choice,
} from "./styled";
import Info from "./Item";

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
      <Container>
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
        <Main>
          <Top>
            <Choice active>Info</Choice>
            <Choice>Schedule</Choice>
          </Top>
          <InfoWrapper>
            <Info
              icon="chevron_left"
              content={`${salon.address.street}, ${salon.address.postalCode} ${salon.address.city}`}
            />
            <Info
              icon="hours"
              content={`Open until ${salon.openingHours[0].closes} today`}
              extend="chevron_down"
            />
            <Info icon="phone" content={salon.phone} />
            <Info icon="website" content={salon.website} />
            <Description>
              {salon.description.map((text, index) => (
                <P1
                  key={index}
                  style={{
                    lineHeight: "var(--lh-2)",
                    marginBottom: "var(--gutter-xs)",
                  }}
                >
                  {text}
                </P1>
              ))}
            </Description>
          </InfoWrapper>
        </Main>
      </Container>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default SalonPage;
