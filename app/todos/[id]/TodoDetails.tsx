"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "@/services/todos";

function TodoDetails() {
  const { id } = useParams<{ id: string }>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { data: todo } = useQuery({
    queryKey: ["todo", Number.parseInt(id, 10)],
    queryFn: () => getTodo(Number.parseInt(id, 10)),
    refetchOnMount: false,
  });

  return (
    <div>
      {isEdit ? (
        <form>
          <input type="text" />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setIsEdit(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h1>{todo?.title}</h1>
          <p>Completed: {todo?.completed ? "Yes" : "No"}</p>
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default TodoDetails;
