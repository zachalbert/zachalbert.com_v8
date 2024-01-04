import Link from "next/link";

export default function NotFound() {
  return (
    <article className="container text-center my-20 max-w-prose mx-auto">
      <h2 className="text-center">Not Found</h2>
      <Link href="/">Try the home page</Link>
    </article>
  );
}
