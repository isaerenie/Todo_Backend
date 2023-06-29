import {siteConfig} from "../configs/axiosConfig";
import {TodoDto} from "../models/dto/TodoDto.ts";
import {TodoDetails, TodoResponse} from "../models/TodoResponse";


//  State ve action type'larına göre state'i güncelle.
class TodoApiService {

    //CREATE
    // localhost:3333/api/v1/create
    create(Todo: TodoDto) {
        return siteConfig.post<TodoDetails>("create", Todo);
    }

    //LIST
    // localhost:3333/api/v1/list
    list() {
        return siteConfig.get<TodoResponse>("list");
    }

    //UPDATE
    // localhost:3333/api/v1/update/1
    update(id: number, Todo: TodoDto) {
        return siteConfig.put<TodoDetails>(`update/` + id, Todo);
    }

    //UPDATE CHECKED
    // localhost:3333/api/v1/updatechecked/1
    updateChecked(id: number, done: boolean) {
        console.log(done);

        return siteConfig.put<TodoDetails>(`updatechecked/` + id + `/` + done);
    }

    //DELETE
    // localhost:3333/api/v1/delete/1
    delete(id: number) {
        return siteConfig.delete<TodoDetails>(`delete/` + id);
    }

    //FINDBYID
    // localhost:3333/api/v1/find/1
    findById(id: number) {
        return siteConfig.get<TodoDetails>(`find/` + id);
    }

    //ALL DONE
    // localhost:3333/api/v1/done
    allDoneList() {
        return siteConfig.get(`done`);
    }

    //ALL TODO
    // localhost:3333/api/v1/todo
    allTodoList() {
        return siteConfig.get(`todo`);
    }

    //DELETE ALL DONE
    // localhost:3333/api/v1/deletealldone
    deleteAllDone() {
        return siteConfig.delete(`deleteAllDone`);
    }

    //DELETE ALL
    // localhost:3333/api/v1/deleteall
    deleteAll() {
        return siteConfig.delete(`all`);
    }
}

export default TodoApiService;

