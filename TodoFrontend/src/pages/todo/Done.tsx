import { useEffect, useState } from "react";
import TodoApiService from "../../services/TodoApiService";
import { TodoDetails } from "../../models/TodoResponse";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

function Done() {
  const [dones, setDones] = useState<TodoDetails[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editSubject, setEditSubject] = useState<string>("");
  const todoApiService = new TodoApiService();

  const doneList = () => {
    todoApiService.allDoneList().then((res) => {
      setDones(res.data.details.todo);
    });
  };

  const updateCheck = (id: number, done: boolean) => {
    todoApiService.updateChecked(id, done).then((res) => {
      if (res.status === 200) {
        toast.success("Todo Checked updated successfully");
        doneList();
      } else {
        toast.error("Todo Checked update failed");
      }
    });
  };

  const updateTodo = (id: number, todo: TodoDetails) => {
    todoApiService.update(id, todo).then((res) => {
      if (res.status === 200) {
        toast.success("Todo updated successfully");
        doneList();
      } else {
        toast.error("Todo update failed");
      }
    });
  };

  const handleDeleteClick = (id: number) => {
    confirmAlert({
      message: "Are you sure you want to delete this todo?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            todoApiService.delete(id).then((res) => {
              if (res.status === 200) {
                toast.success("Todo deleted successfully");
                doneList();
              } else {
                toast.error("Todo delete failed");
              }
            });
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleEditClick = (id: number, subject: string) => {
    setEditId(id);
    setEditSubject(subject);
  };

  const handleSaveClick = (id: number) => {
    if (editSubject.trim() !== "") {
      const todo: TodoDetails = {
        id,
        systemDate: new Date(),
        subject: editSubject,
        done: true,
      };

      updateTodo(id, todo);
    }

    setEditId(null);
    setEditSubject("");
  };

  useEffect(() => {
    doneList();
  }, []);

  return (
    <>
      {dones.map((todo) => (
        <div className="mb-5" key={todo.id}>
          <div className="row border border-info pt-3 mt-3 mb-3">
            <div className="col-md-9">
              {editId === todo.id ? (
                <p
                  className="text-start ps-2 border border-danger"
                  contentEditable
                  onBlur={(e) => setEditSubject(e.target.innerText)}
                  suppressContentEditableWarning={true}
                >
                  {editSubject}
                </p>
              ) : (
                <p className="text-start ps-2 text-decoration-line-through">
                  {todo.subject}
                </p>
              )}
            </div>
            <div className="col-md-3 pe-0">
              <input
                className="form-check-input me-3 ms-5"
                type="checkbox"
                onChange={() => updateCheck(todo.id, false)}
                checked={true}
                id="flexCheckDefault"
              />
              {editId === todo.id ? (
                <span onClick={() => handleSaveClick(todo.id)}>
                  <i
                    className="fa-solid fa-save me-3"
                    style={{ cursor: "pointer", color: "green" }}
                  ></i>
                </span>
              ) : (
                <span onClick={() => handleEditClick(todo.id, todo.subject)}>
                  <i
                    className="fa-solid fa-pen me-3"
                    style={{ cursor: "pointer", color: "orange" }}
                  ></i>
                </span>
              )}

              <span onClick={() => handleDeleteClick(todo.id)}>
                <i
                  className="fa-solid fa-trash text-danger mt-1"
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Done;
