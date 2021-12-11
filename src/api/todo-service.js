import axios from "axios";

export const fetchAllTodos = () => {
  return axios("https://jsonplaceholder.typicode.com/todos");
};
