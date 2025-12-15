import axios from "axios";

import type { Todo, TodoPayload } from "@/types/todo";

export async function getTodos() {
  const { data } = await axios.get<Todo[]>("http://localhost:3000/api/todos");
  return data;
}

export async function getTodo(todoId: Todo["id"]) {
  const { data } = await axios.get<Todo>(
    `http://localhost:3000/api/todos/${todoId}`,
  );
  return data;
}

export async function createTodo(payload: TodoPayload) {
  const { data } = await axios.post<Todo>(
    "http://localhost:3000/api/todos",
    payload,
  );
  return data;
}
