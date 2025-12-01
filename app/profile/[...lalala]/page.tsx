import { notFound } from "next/navigation";

interface ProfileNicknameProps {
  params: Promise<{ lalala: string[] }>;
}

async function ProfileNickname({ params }: ProfileNicknameProps) {
  const { lalala } = await params;

  if (lalala[0] === "vmudrij") {
    return notFound();
  }

  return (
    <div>
      <h1>Hello, {lalala[0]}</h1>
      <h3>{lalala[1]}</h3>
      <p>Display {lalala[2]} items</p>
    </div>
  );
}

export default ProfileNickname;
