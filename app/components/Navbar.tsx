// components/Navbar.js
import { Button } from "@/components/ui/button"


export default function Navbar() {
  return (
    <nav className="bg-[#405299] text-black sticky top-0 z-50 w-full flex justify-between items-center py-4 px-6">
      <div className="flex w-[100px] justify-center items-center gap-5">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="text-2xl text-black font-bold">Driving Vitals</div>
      <div>
        {/* To change the hover color edit the className */}
        <Button variant="default" className="bg-sky-500 hover:bg-sky-700 width-[50px]">Take the Test</Button>

      </div>
    </nav>
  );
}
