// components/Navbar.js


export default function Navbar() {
  return (
    <nav className="bg-navyBlue text-white sticky top-0 z-50 w-full flex justify-between items-center py-4 px-6">
      <div className="flex gap-6">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="text-2xl font-bold">Driving Vitals</div>
      {/* <Button className="bg-black text-white px-4 py-2">Take Test</Button> */}
    </nav>
  );
}
