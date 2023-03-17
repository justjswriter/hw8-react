import { Link } from "react-router-dom";

const MainPageContent = () => {
  return (
    <div>
      <h1>Choose Category</h1>
      <Link to="/people">People</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/starships">Starships</Link>
    </div>
  );
};

export default MainPageContent;
