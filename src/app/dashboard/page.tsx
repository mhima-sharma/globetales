"use client";

import { useRouter } from "next/navigation";
export default function Dashboard() {
  
    const router = useRouter();

    const gologin = () =>(
    router.push("/auth/login")
    )

  return (
   <main className="flex flex-col items-center justify-center min-h-screen p-6"
    style={{
    backgroundImage: "url('/images/background-image.png')", // put your image in public/images
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }} >
      <h1 className="text-3xl font-bold" style={{ color: '#5C3A21' }}>
  Welcome to GlobeTales 🌍
</h1>
<p className="mt-2" style={{ color: '#8C6A4A' }}>
  Your community travel journal
</p>
<button
  onClick={gologin}
  style={{ backgroundColor: '#009688', color: 'white' }}
  className="px-4 py-2 rounded-md hover:bg-[#00796B] transition"
>
  Login
</button>

    </main>
  );
}