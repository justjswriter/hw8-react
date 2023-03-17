import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiClient from "../common/api";
import { IStarship } from "../types";
import "../styles/fullPage.css";

const FullStarshipPage = () => {
  const { starshipId } = useParams();
  const [starshipData, setStarshipData] = useState<IStarship>();

  const getPost = async () => {
    try {
      const res = await apiClient.get(`/starships/${starshipId}`);
      setStarshipData(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getPost();
    console.log(starshipData);
  }, []);

  if (starshipData === undefined) {
    return (
      <div>
        <h2>Loading starship</h2>
      </div>
    );
  }

  return (
    <div>
      <Link to={"/starships"}>Назад</Link>
      <div className="fullDataContainer">
        <div className="imageContainerFullData">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/starships/" +
              starshipId +
              ".jpg"
            }
            alt=""
          />
        </div>
        <div className="textDataFullData">
          <h2>Name: {starshipData.name}</h2>
          <h3>passengers: {starshipData.passengers}</h3>
          <h3>class : {starshipData.starship_class}</h3>
          <h3>Model: {starshipData.model}</h3>
        </div>
      </div>
    </div>
  );
};

export default FullStarshipPage;
