import { createBrowserRouter } from "react-router-dom";
import Accountaccess from "./Accountaccess";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Accountaccess />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])
  return (
    <div >
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
