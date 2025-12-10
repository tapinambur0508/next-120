import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { TodoPayload } from "@/types/todo";

interface TodoDraft {
  draft: TodoPayload;
  saveDraft: (data: TodoPayload) => void;
  clearDraft: () => void;
}

export const useTodoDraft = create<TodoDraft>()(
  persist(
    (set) => ({
      draft: {
        title: "",
      },
      saveDraft: (data) => set({ draft: data }),
      clearDraft: () => set({ draft: { title: "" } }),
    }),
    {
      name: "todo-draft",
    },
  ),
);
