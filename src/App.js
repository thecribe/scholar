import "./styles.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>Root</h1>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
