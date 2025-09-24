import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";
import Content from "../components/content/page";


export default async function GlobetalesDash() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const userRes = await fetch('https://randomuser.me/api/');
  const userData = await userRes.json();
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="pt-16 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Welcome to GlobeTales Dashboard 🌍</h1>
         <div>
          <Content/>
   
     
    </div>
        
      </div>
      {/* footer  */}
      <div className=" bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
    
  );
}
