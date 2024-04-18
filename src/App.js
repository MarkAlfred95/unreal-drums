import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Drums from "./pages/Drums";
import About from "./pages/About";
import Mixer from "./pages/Mixer";
import Edit from "./pages/Edit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Drums />} />
      <Route path="about" element={<About />} />
      <Route path="mixer" element={<Mixer />} />
      <Route path="edit" element={<Edit />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
