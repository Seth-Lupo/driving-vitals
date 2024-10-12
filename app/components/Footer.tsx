// components/Footer.js


export default function Footer() {
  return (
    <footer className="bg-navyBlue text-white py-4">
      <div className="flex justify-between items-center px-6">
        <div className="text-sm">© 2024, made for Harvard Hacks 2024</div>
        {/* <Button className="bg-black text-white">Repository</Button> */}
      </div>
      <div className="border-dashed border-t-2 border-white my-4"></div>
      <div className="flex justify-between px-6">
        {/* <Button className="bg-black text-white">About</Button>
        <Button className="bg-black text-white">Contact</Button> */}
      </div>
    </footer>
  );
}
