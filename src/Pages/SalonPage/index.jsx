import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Icon } from "../../Components";

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
          padding: "var(--gutter-md)",
          background: "red",
        }}
      >
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon icon="chevron_left" size="24"></Icon>
        </button>
      </header>
    </>
  );
};

export default SalonPage;
