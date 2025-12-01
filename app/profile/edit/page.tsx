// import Link from "next/link";
"use client";

import { useRouter } from "next/navigation";

function ProfileEdit() {
  const router = useRouter();

  const handleClick = () => {
    if (confirm("Are you sure want to leave?")) {
      router.push("/profile");
    }
  };
  return (
    <div>
      <h1>Profile Edit</h1>
      {/* <Link href="/profile">Back</Link> */}
      <button onClick={handleClick}>Back</button>
    </div>
  );
}

export default ProfileEdit;
