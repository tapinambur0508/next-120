import Link from "next/link";

interface ProfileLayoutProps {
  children: React.ReactNode;
  photos: React.ReactNode;
}

function ProfileLayout({ children, photos }: ProfileLayoutProps) {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <li>
          <Link href="/profile/about">About</Link>
        </li>
        <li>
          <Link href="/profile/settings">Settings</Link>
        </li>
        <li>
          <Link href="/profile/edit">Edit</Link>
        </li>
      </ul>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>{photos}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ProfileLayout;
