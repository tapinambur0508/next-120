"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { register } from "@/services/auth";
import { useAuthStore } from "@/store/auth";
import { useState } from "react";

import type { ApiError } from "@/types/api";

function Registration() {
  const setUser = useAuthStore((store) => store.setUser);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setUser(data);
      router.push("/profile");
    },
    onError: (error) => {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      );
    },
  });

  const handleSubmit = (formData: FormData) => {
    const userName = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    mutate({ userName, email, password });
  };

  return (
    <form action={handleSubmit}>
      <p>{error}</p>
      <div>
        <label>
          Name: <input type="text" name="name" required />
        </label>
      </div>
      <div>
        <label>
          Email: <input type="email" name="email" required />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" name="password" required />
        </label>
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Registration;
