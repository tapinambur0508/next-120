import axios from "axios";

import { NextRequest, NextResponse } from "next/server";

import type { Todo, TodoPayload } from "@/types/todo";

export async function GET() {
  const { data } = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as TodoPayload;
  const { data } = await axios.post<Todo>(
    "https://jsonplaceholder.typicode.com/todos",
    payload,
  );
  return NextResponse.json(data);
}
