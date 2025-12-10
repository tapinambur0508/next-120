import axios from "axios";

import type { Todo, TodoPayload } from "@/types/todo";

export async function getTodos() {
  const { data } = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return data;
}

export async function getTodo(todoId: Todo["id"]) {
  const { data } = await axios.get<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  );
  return data;
}

export async function createTodo(payload: TodoPayload) {
  const { data } = await axios.post<Todo>(
    "https://jsonplaceholder.typicode.com/todos",
    payload,
  );
  return data;
}
