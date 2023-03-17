import { IStarship } from "../../types";
import { FC } from "react";
import { Link } from "react-router-dom";
import "../../styles/cardStyle.css";


const StarshipCard: FC<IStarship> = ({name, url}) => {
    const array = url.split("/");
    const imageSrc =
      "https://starwars-visualguide.com/assets/img/starships/" +
      array[array.length - 2] +
      ".jpg";

    return(
        <div>
        <div className="dataCard">
          <Link to={"/starships/" + array[array.length - 2]}>
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
    )
}

export default StarshipCard