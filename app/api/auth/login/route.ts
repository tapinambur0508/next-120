import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  console.log(payload);
  return NextResponse.json({ status: "OK" });
}
