import { IPeople } from "../../types";
import { FC } from "react";
import { Link } from "react-router-dom";
import "../../styles/cardStyle.css";

const PeopleCard: FC<IPeople> = ({ name, url }) => {
  const array = url.split("/");
  const imageSrc =
    "https://starwars-visualguide.com/assets/img/characters/" +
    array[array.length - 2] +
    ".jpg";
  return (
    <div>
      <div className="dataCard">
        <Link to={"/people/" + array[array.length - 2]}>
          <div>
            <img
              src={imageSrc}
              alt=""
              className="dataCardImage"
            />
            <p>{name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PeopleCard;
