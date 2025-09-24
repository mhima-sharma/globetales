import { Key } from "react";

export default async function Content() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const userRes = await fetch("https://randomuser.me/api/");
  const userData = await userRes.json();
  const user = userData.results[0];

  return (
   <div></div>
  );
}
