import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>Oops. The page that are you looking for doesn't exists</h1>
      <p>
        <Link href="/">Back home</Link>
      </p>
    </div>
  );
}

export default NotFound;
