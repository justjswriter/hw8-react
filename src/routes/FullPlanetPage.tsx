import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient from "../common/api";
import { IPlanet } from "../types";
import "../styles/fullPage.css";

const FullPagePlanet = () => {
  const { planetId } = useParams();
  const [planetData, setPlanetData] = useState<IPlanet>();

  const getPost = async () => {
    try {
      const res = await apiClient.get(`/planets/${planetId}`);
      setPlanetData(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getPost();
    console.log(planetData);
  }, []);

  if (planetData === undefined) {
    return (
      <div>
        <h2>Loading Planet</h2>
      </div>
    );
  }

  return (
    <div>
      <Link to={"/planets"}>Назад</Link>
      <div className="fullDataContainer">
        <div className="imageContainerFullData">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/planets/" +
              planetId +
              ".jpg"
            }
            alt=""
          />
        </div>
        <div className="textDataFullData">
          <h2>Name: {planetData.name}</h2>
          <h3>climate: {planetData.climate}</h3>
          <h3>diameter: {planetData.diameter}</h3>
          <h3>terrain: {planetData.terrain}</h3>
          <h3>population: {planetData.population}</h3>
          <h3>orbital period: {planetData.orbital_period}</h3>
        </div>
      </div>
    </div>
  );
};

export default FullPagePlanet;
