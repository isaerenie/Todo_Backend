import { axiosConfig } from "../configs/axiosConfig";
import { TodoDto } from "../models/TodoDto";
import { TodoDetails, TodoResponse } from "../models/TodoResponse";





//  State ve action type'larına göre state'i güncelle.
class TodoApiService {

  //CREATE
  // localhost:3333/api/v1/create
  create(Todo: TodoDto) {
    return axiosConfig.post<TodoDetails>("api/v1/create", Todo);
  }


  //LIST
  // localhost:3333/api/v1/list
  list() {
    return axiosConfig.get<TodoResponse>("api/v1/list");
  }



  //UPDATE
  // localhost:3333/api/v1/update/1
  update(id: number, Todo: TodoDto) {
    return axiosConfig.put<TodoDetails>(`api/v1/update/` + id, Todo);
  }

  //UPDATE CHECKED
  // localhost:3333/api/v1/updatechecked/1
  updateChecked(id: number, done: boolean) {
    console.log(done);

    return axiosConfig.put<TodoDetails>(`api/v1/updatechecked/` + id+`/`+done);
  }

  //DELETE
  // localhost:3333/api/v1/delete/1
  delete(id: number) {
    return axiosConfig.delete<TodoDetails>(`api/v1/delete/` + id);
  }

  //FINDBYID
  // localhost:3333/api/v1/find/1
  findById(id: number) {
    return axiosConfig.get<TodoDetails>(`api/v1/find/` + id);
  }

  //ALL DONE
  // localhost:3333/api/v1/Done
  allDoneList() {
    return axiosConfig.get(`api/v1/done`);
  }

  //ALL TODO
  // localhost:3333/api/v1/todo
  allTodoList() {
    return axiosConfig.get(`api/v1/todo`);
  }

  //DELETE ALL DONE
  // localhost:3333/api/v1/deletealldone
  deleteAllDone() {
    return axiosConfig.delete(`api/v1/deleteAllDone`);
  }

  //DELETE ALL
  // localhost:3333/api/v1/deleteall
  deleteAll() {
    return axiosConfig.delete(`api/v1/all`);
  }
}

export default TodoApiService;

