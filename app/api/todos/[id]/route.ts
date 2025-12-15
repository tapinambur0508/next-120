import { NextRequest, NextResponse } from "next/server";

import API from "../../api";

import type { Todo } from "@/types/todo";

interface TodoProp {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: TodoProp) {
  const { id } = await params;
  const { data } = await API.get<Todo>(`/todos/${id}`);
  return NextResponse.json(data);
}
