import apiClient from "../common/api";
import { useState, useEffect } from "react";
import { IPlanet } from "../types";
import { PlanetCard } from "../components";
import "../styles/pageStyle.css";

interface IPlanets {
  next: string | null;
  results: IPlanet[];
}

const PlanetPage = () => {
  const [page, setPage] = useState(1);
  const [planets, setStarships] = useState<IPlanets>({ next: "", results: [] });

  const getPlanets = async () => {
    try {
      const res = await apiClient.get(`/planets/?page=${page}`);
      setStarships(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getPlanets();
  }, [page]);

  return (
    <div>
      <div className="cardContainer">
        {planets.results.map((planet) => (
          <PlanetCard {...planet} />
        ))}
      </div>
      <div>
        {page !== 1 && (
          <input type="button" value="prev" onClick={() => setPage(page - 1)} />
        )}
        {planets.next !== null && (
          <input type="button" value="next" onClick={() => setPage(page + 1)} />
        )}
      </div>
    </div>
  );
};

export default PlanetPage;
