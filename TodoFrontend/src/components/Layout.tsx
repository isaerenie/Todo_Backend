
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
      <div id="layout" className="container mt-5 text-center">
          <button className="btn btn-danger" onClick={fncLogout}>Logout</button>
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

