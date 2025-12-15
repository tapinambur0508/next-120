import { NextRequest, NextResponse } from "next/server";

import API from "../api";

import type { Todo, TodoPayload } from "@/types/todo";

export async function GET() {
  const { data } = await API.get<Todo[]>("/todos");
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as TodoPayload;
  const { data } = await API.post<Todo>("/todos", payload);
  return NextResponse.json(data);
}
