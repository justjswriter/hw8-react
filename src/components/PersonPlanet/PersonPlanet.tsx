import { FC } from "react";
import { IPlanet } from "../../types";

interface IPersonPlanetProps {
  url: string | IPlanet;
}

const PersonPlanet: FC<IPersonPlanetProps> = ({ url }) => {
  return (
    <>
      <span>loading</span>
    </>
  );
};

export default PersonPlanet;
