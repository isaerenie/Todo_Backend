import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
import {Outlet, useNavigate} from "react-router-dom";
import TodoDelete from "./todo/TodoDelete";
import {confirmAlert} from "react-confirm-alert";

function Layout() {
    const navigate = useNavigate()
    const fncLogout = () => {
        confirmAlert({
            message: "Are you sure you want to logout?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        sessionStorage.removeItem('user')
                        localStorage.removeItem('user')
                        navigate('/')
                    }
                },
                {
                    label: "No",
                    onClick: () => {
                        navigate("/all")
                    }
                }
            ]
        })

    }
    return (
        <>
            <div id="layout" className="container mt-5 mb-0 text-center">
                <div className="row mt-5 ">
                    <div id="logoutBtn" className="col-12">
                  <span className="btn btn-danger" onClick={fncLogout}><i
                      className="fa-solid fa-right-from-bracket"></i></span>
                    </div>
                </div>
                {/* Add Todo */}
                <AddTodo/>

                {/* Todo List */}
                <TodoList/>

                {/* Todo Item */}
                <Outlet/>

                {/* Delete Todo */}
                <TodoDelete/>

            </div>
        </>
    );
}

export default Layout;

