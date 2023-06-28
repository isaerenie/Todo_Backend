
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
import {Outlet, useNavigate} from "react-router-dom";
import TodoDelete from "./todo/TodoDelete";

function Layout() {
    const navigate = useNavigate()
    const fncLogout = () => {
        sessionStorage.removeItem('user')
        localStorage.removeItem('user')
        navigate('/')

    }
  return (
    <>
      <div id="layout" className="container mt-5 mb-0 text-center">
    <div className="row mt-5">
        <div className="col-12">
            <button className="btn btn-danger" onClick={fncLogout}>Logout</button>
        </div>
    </div>
        {/* Add Todo */}
         <AddTodo />

        {/* Todo List */}
        <TodoList />

        {/* Todo İtem */}
        <Outlet/>

        {/* Delete Section */}
         <TodoDelete />

      </div>
    </>
  );
}

export default Layout;

