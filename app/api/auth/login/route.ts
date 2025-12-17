import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";
import { cookies } from "next/headers";

import { api, ApiError } from "../../api";

export async function POST(request: NextRequest) {
  const payload = await request.json();

  try {
    const response = await api.post("/auth/login", payload);

    const cookieStore = await cookies();
    const setCookie = response.headers["set-cookie"];

    if (setCookie) {
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

      for (const cookie of cookieArray) {
        const parsed = parse(cookie);
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed["Max-Age"]),
        };

        if (parsed.accessToken) {
          cookieStore.set("accessToken", parsed.accessToken, options);
        }

        if (parsed.refreshToken) {
          cookieStore.set("refreshToken", parsed.refreshToken, options);
        }
      }

      return NextResponse.json(response.data);
    } else {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      {
        status: (error as ApiError).status,
      },
    );
  }
}
