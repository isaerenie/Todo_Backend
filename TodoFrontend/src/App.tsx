import { useRoutes } from "react-router-dom";

import All, { TodoContext } from "./pages/todo/All";
import Done from "./pages/todo/Done";
import Todo from "./pages/todo/Todo";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import {AuthGuard} from "./guards/AuthGuards.tsx";

function App() {
  const updateAllTodos = () => {
    console.log("updateAllTodos");
  };

  const routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/unauthorized",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <>
          <AuthGuard>
          <TodoContext.Provider value={{ updateAllTodos }}>
            <Layout />
          </TodoContext.Provider>
          </AuthGuard>
        </>
      ),
      children: [
        {
          path: "all",
          element: <All />,
        },
        {
          path: "/",
          element: <All />,
        },
        {
          path: "done",
          element: <Done />,
        },
        {
          path: "todo",
          element: <Todo />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return routes;
}

export default App;
