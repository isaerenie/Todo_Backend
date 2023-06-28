
import TodoApiService from "../../services/TodoApiService";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

function TodoDelete() {
  // Tüm todolar silindikten sonra allTodoList fonksiyonunu çağırmak için useNavigate hook'unu kullandık.
  const nav = useNavigate();

  // TodoApiService sınıfından bir nesne oluşturduk
  const todoApiService = new TodoApiService();

  // TodoApiService sınıfından bir nesne oluşturduk ve delete all done fonksiyonunu çağırdık.
  const deleteAllDone = () => {
    todoApiService.deleteAllDone().then((res) => {
     if ( res.status === 200) {
         toast('All done task deleted', {
             position: "bottom-left",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
         });
      nav("/all");
     }else{
      toast.error('Something went wrong')
     }
    });
  };
  // TodoApiService sınıfından bir nesne oluşturduk ve delete all fonksiyonunu çağırdık.
  const deleteAll = () => {
    todoApiService.deleteAll().then((res) => {
      if ( res.status === 200) {
          toast('All task deleted', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
          });
        nav("/all");
       }else{
        toast.error('Something went wrong')
       }
    });
  };


  return (
    <>
      <div className="row dlt">
        <div className=" d-grid col-6 ps-0">
          <button
            onClick={deleteAllDone}
            className="btn btn-danger flaot-end"
            type="button"
          >
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
