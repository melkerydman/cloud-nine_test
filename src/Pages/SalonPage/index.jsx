import React from "react";
import { useParams } from "react-router-dom";

const SalonPage = () => {
  const params = useParams();
  console.log(params);
  return <div>SalonPage</div>;
};

export default SalonPage;
