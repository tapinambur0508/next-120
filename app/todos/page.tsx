import Link from "next/link";

import { getTodos } from "@/services/todos";

async function Todos() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todos</h1>

      <ul style={{ paddingInline: "40px", listStyleType: "disc" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>
              <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
