import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex, H3, Icon } from "../../Components";

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
  console.log(salon);

  return (
    <>
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
            <Icon icon="chevron_left" size="24" color="var(--clr-white)"></Icon>
          </button>
          <button>
            <Icon icon="heart" size="24" color="var(--clr-white)"></Icon>
          </button>
        </Flex>
        <Flex column>
          <H3 style={{ color: "var(--clr-white)" }}>{salon.name}</H3>
        </Flex>
      </header>
    </>
  );
};

export default SalonPage;
