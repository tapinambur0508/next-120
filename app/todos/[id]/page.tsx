import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { getTodo } from "@/services/todos";

// import EditButton from "./EditButton";

import TodoDetails from "./TodoDetails";
import type { Metadata } from "next";

interface TodoProp {
  params: Promise<{ id: string }>;
}

// Pure SSR
// async function Todo({params}: TodoProp) {
//   const {id} = await params;
//   const todo = await getTodo(Number.parseInt(id, 10));

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <p>
//         Completed: {todo.completed ? "Yes" : "No"}
//       </p>
//       <EditButton />
//     </div>
//   );
// }

// export default Todo;

export const generateMetadata = async ({
  params,
}: TodoProp): Promise<Metadata> => {
  const { id } = await params;
  const todo = await getTodo(Number.parseInt(id, 10));

  return {
    title: todo.title,
    description: `Description for Todo #${todo.id}`,
    openGraph: {
      title: todo.title,
      description: `Description for Todo #${todo.id}`,
    },
  };
};

// SSG
async function Todo({ params }: TodoProp) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todo", Number.parseInt(id, 10)],
    queryFn: () => getTodo(Number.parseInt(id, 10)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoDetails />
    </HydrationBoundary>
  );
}

export default Todo;
