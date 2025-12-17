import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { api, ApiError } from "../../api";

export async function POST() {
  const cookieStore = await cookies();

  await api.post("/auth/logout", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ message: "Logout is successful" });
}
