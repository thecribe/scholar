import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Homepage, { loader } from "./pages/Homepage/Homepage";
import Staff from "./pages/Staff/Staff";
import Student from "./pages/Student/Student";
import Research from "./pages/Research/Research";
import Placeholder from "./pages/Placeholder";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" exact element={<Homepage />} loader={loader} />
      <Route path="/staff" exact element={<Placeholder />}>
        <Route path="/staff" element={<Staff />} />
      </Route>
      <Route path="/student-arena" exact element={<Placeholder />}>
        <Route path="/student-arena" element={<Student />} />
      </Route>
      <Route path="/research" exact element={<Placeholder />}>
        <Route path="/research" element={<Research />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
