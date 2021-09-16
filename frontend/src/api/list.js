import appserve from "./appserve";

const API_URL = "/list";
export default {
   geToDoList() {
    return appserve.get(`${API_URL}`);
  },
  addTodoItem(params) {
    return appserve.post(`${API_URL}`, params);
  },
  deleteTodoItem(uuid) {
    return appserve.delete(`${API_URL}/${uuid}`);
  },
  editTodoItem(uuid, params) {
    return appserve.put(`${API_URL}/${uuid}`, params);
  }
};
