
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";
import { Outlet } from "react-router-dom";
import TodoDelete from "./todo/TodoDelete";

function Layout() {
  return (
    <>
      <div id="layout" className="container mt-5 text-center">
        
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

