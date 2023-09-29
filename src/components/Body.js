import Home from "./Home";
import Login from "./Login";
import MainPage from "./MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./Search";
import Album from "./Album";

const Body = () => {
  // const navigate = useNavigate();
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Home />,
         
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/album/:id",
          element: <Album />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
