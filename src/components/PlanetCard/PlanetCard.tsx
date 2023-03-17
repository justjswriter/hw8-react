import {FC} from 'react'
import { Link } from 'react-router-dom'
import { IPlanet } from '../../types'
import "../../styles/cardStyle.css";


const PlanetCard : FC<IPlanet> = ({name, url}) => {
    const array = url.split("/");
    const imageSrc =
      "https://starwars-visualguide.com/assets/img/planets/" +
      array[array.length - 2] +
      ".jpg";
    return (
        <div>
        <div className="dataCard">
          <Link to={"/planets/" + array[array.length - 2]}>
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

export default PlanetCard