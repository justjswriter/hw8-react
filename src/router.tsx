import { createBrowserRouter } from "react-router-dom";
import {
  ErrorPage,
  MainPage,
  PeoplePage,
  PlanetPage,
  StarshipPage,
  MainPageContent,
  FullPersonPage,
  FullPlanetPage,
  FullStarshipPage
} from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPageContent /> },
      { path: "/people", element: <PeoplePage /> },
      { path: "/people/:personId", element: <FullPersonPage /> },
      { path: "/planets", element: <PlanetPage /> },
      { path: "/planets/:planetId", element: <FullPlanetPage /> },
      { path: "/starships", element: <StarshipPage /> },
      { path: "/starships/:starshipId", element: <FullStarshipPage /> },
    ],
  },
]);

export default router;
