import TodoApiService from "../../services/TodoApiService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {confirmAlert} from "react-confirm-alert";

function TodoDelete() {

    const nav = useNavigate();
    const todoApiService = new TodoApiService();

    // TodoApiService sınıfından bir nesne oluşturduk ve delete all done fonksiyonunu çağırdık.

    //deleteAllDone
    const deleteAllDone = () => {
        confirmAlert({
            message: "Are you sure you want to delete done tasks?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        todoApiService.deleteAllDone().then((res) => {
                            if (res.status === 200) {
                                toast('Done tasks deleted', {
                                    position: "bottom-right",
                                });
                                nav("/all");
                            } else {
                                toast.error('Something went wrong')
                            }
                        });
                    }
                },
                {
                    label: "No",
                    onClick: () => {
                        nav("/all")
                    }
                }
            ]
        })
    };


    // deleteAll
    const deleteAll = () => {
        confirmAlert({
            message: "Are you sure you want to delete all tasks?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        todoApiService.deleteAll().then((res) => {
                            if (res.status === 200) {
                                toast('All tasks deleted', {
                                    position: "bottom-right",
                                });
                                nav("/all");
                            } else {
                                toast.error('Something went wrong')
                            }
                        });
                    }
                },
                {
                    label: "No",
                    onClick: () => {
                        nav("/all")
                    }
                }
            ]
        })
    };


    return (
        <>
            <div className="row dlt">
                <div className=" d-grid col-6 ps-0">
                    <button
                        onClick={deleteAllDone}
                        className="btn btn-danger flaot-end"
                        type="button">
                        Delete done tasks
                    </button>
                </div>
                <div className="d-grid col-6 pe-0">
                    <button onClick={deleteAll} className="btn btn-danger" type="button">
                        Delete All tasks
                    </button>
                </div>
            </div>
        </>
    );
}

export default TodoDelete;
