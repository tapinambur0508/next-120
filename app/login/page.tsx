"use client";

import { useMutation } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";

import { login } from "@/services/auth";

function Login() {
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    mutate({ email, password });
  };

  return (
    <form action={handleSubmit}>
      <div>
        <label>
          Email: <input required type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password: <input required type="password" name="password" />
        </label>
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          Log in
        </button>
      </div>
    </form>
  );
}

export default Login;
