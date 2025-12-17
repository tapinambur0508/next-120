import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

import type { Todo } from "@/types/todo";

interface TodoProp {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: TodoProp) {
  const { id } = await params;
  const { data } = await axios.get<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  return NextResponse.json(data);
}
