"use client";

import { useMutation } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";

import { register } from "@/services/auth";

function Registration() {
  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    mutate({ name, email, password });
  };

  return (
    <form action={handleSubmit}>
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
