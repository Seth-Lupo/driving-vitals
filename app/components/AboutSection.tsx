// components/AboutSection.js



export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-white flex">
      <div className="w-1/2 p-6">
        <h2 className="text-black text-2xl font-bold">About Driving Vitals</h2>
        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* <Button className="mt-6 bg-black text-white">Play the Game</Button> */}
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src="/insertimage2.jpg" alt="About Image" className="w-[200px] h-[200px] object-cover" />
      </div>
    </section>
  );
}

