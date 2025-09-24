import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";

export default function GlobetalesDash() {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="pt-16 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Welcome to GlobeTales Dashboard 🌍</h1>
        
      </div>
      {/* footer  */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>
    </div>
    
  );
}
