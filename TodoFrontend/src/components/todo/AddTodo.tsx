import {useForm} from "react-hook-form";
import {TodoDto} from "../../models/TodoDto";
import TodoApiService from "../../services/TodoApiService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import { useContext } from "react";
import { TodoContext } from "../../pages/todo/All";


function AddTodo() {
    const todoApiService = new TodoApiService();
    const { updateAllTodos } = useContext(TodoContext);

    const nav = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<TodoDto>();

    const onSubmit = handleSubmit((data) => {
        todoApiService.create(data).then((res) => {
                if (res.status === 200) {
                    toast.success('New Todo added', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    updateAllTodos()
                    nav("/all");
                    reset();
                } else {
                    toast.error('Something went wrong', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            }
        );
    });

    return (
        <>
            <div className="row addtodo mt-5">
                <h3 className="pb-0">TodoInput</h3>
                <div className="border border-info p-4 mb-4 rounded-1">
                    <form onSubmit={onSubmit}>
                        <div className="input-group mb-3">
              <span className="input-group-text bg-info" id="basic-addon1">
                <i className="fa-solid fa-bars"></i>
              </span>
                            <input
                                type="text"
                                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                                placeholder="New Todo"
                                {...register("subject", {required: "Subject is required"})}
                            />
                            {errors.subject && (
                                <div className="invalid-feedback">{errors.subject.message}</div>
                            )}
                        </div>
                        <div className="d-grid gap-2">
                            <button
                                className="btn btn-info "
                                type="submit"
                            >
                                Add new task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTodo;
