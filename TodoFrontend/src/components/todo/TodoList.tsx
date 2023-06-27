import { NavLink } from "react-router-dom";

function TodoList() {


  return (
    <>
      <h3>TodoList</h3>
      <div className="row mb-5">
        <div className="d-grid col-4 ps-0">
          <NavLink
            className="btn btn-info"
            type="button"
            to="/all"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
            })}
          >
            All
          </NavLink>
        </div>
        <div className="d-grid col-4 mx-auto">
          <NavLink
            className="btn btn-info"
            type="button"
            to="/done"
            style={({ isActive }) => ({
              color: isActive ? "black" : "white",
            })}
          >
            Done
          </NavLink>
        </div>
        <div className="d-grid col-4 mx-auto pe-0">
          <NavLink
            className="btn btn-info"
            type="button"
            to="/todo"
            style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
          >
            Todo
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default TodoList;
