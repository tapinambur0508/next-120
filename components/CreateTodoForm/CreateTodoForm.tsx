"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { createTodo } from "@/services/todos";
// import { useCounter } from "@/store/counter";
import { useTodoDraft } from "@/store/todoDraft";

function CreateTodoForm() {
  const router = useRouter();
  // const { value, increment, decrement } = useCounter();
  const { draft, saveDraft, clearDraft } = useTodoDraft();

  const { mutate, isPending } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      clearDraft();
      router.push("/todos");
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    saveDraft({ ...draft, [name]: value });
  };

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    mutate({ title });
  };

  console.log({ draft });

  return (
    // <>
    //   <button onClick={() => decrement(10)}>-</button>
    //   <span>{value}</span>
    //   <button onClick={() => increment(1)}>+</button>
    // </>
    <form action={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={draft.title}
          onChange={handleChange}
        />
      </label>
      <div>
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateTodoForm;
