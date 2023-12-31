import {useRoutes} from "react-router-dom";

import All, {TodoContext} from "./pages/todo/All";
import Done from "./pages/todo/Done";
import Todo from "./pages/todo/Todo";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/user/Login.tsx";
import {AuthGuard} from "./guards/AuthGuards.tsx";
import Register from "./components/user/Register.tsx";
import Unauthorized from "./components/Unauthorized.tsx";

function App() {

    // updateAllTodos oluşturulduktan sonra TodoContext.Provider içerisine eklenir.
    const updateAllTodos = () => {
    };

    // useRoutes kullnılarak rotalar oluşturuldu.
    const routes = useRoutes([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "/unauthorized",
            element: <Unauthorized/>
            ,
        },
        {
            path: "/",
            element: (
                <>
                    {/*AuthGuard Layout içierisindeki tüm rotaları kapsar ve kullanıcı girişi yapılmadan erişim sağlanamaz.*/}
                    <AuthGuard>
                        {/*TodoContext.Provider içerisindeki updateAllTodos fonksiyonu ile tüm todoların güncellenmesi  sağlanır.*/}
                        <TodoContext.Provider value={{updateAllTodos}}>
                            <Layout/>
                        </TodoContext.Provider>
                    </AuthGuard>
                </>
            ),
            children: [
                {
                    path: "all",
                    element: <All/>,
                },
                {
                    path: "done",
                    element: <Done/>,
                },
                {
                    path: "todo",
                    element: <Todo/>,
                },
            ],
        },
        {
            path: "*",
            element: <ErrorPage/>,
        },
    ]);

    return routes;
}

export default App;
