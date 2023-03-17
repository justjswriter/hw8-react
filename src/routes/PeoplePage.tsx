import apiClient from "../common/api";
import { IPeople } from "../types";
import { useState, useEffect } from "react";
import { PeopleCard } from "../components";
import "../styles/pageStyle.css";

interface IPeopleList {
  next: string | null;
  results: IPeople[];
}

const PeoplePage = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState<IPeopleList>({
    next: null,
    results: [],
  });

  const getPeople = async () => {
    try {
      const res = await apiClient.get(`/people/?page=${page}`);
      setPeople(res.data);
      console.log(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getPeople();
  }, [page]);

  if (people.results.length < 1) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>People</h1>
      <div className="cardContainer">
        {people.results.map((person) => (
          <PeopleCard {...person} />
        ))}
      </div>
      <div>
        {page !== 1 && (
          <input type="button" value="prev" onClick={() => setPage(page - 1)} />
        )}
        {people.next !== null && (
          <input type="button" value="next" onClick={() => setPage(page + 1)} />
        )}
      </div>
    </div>
  );
};

export default PeoplePage;
