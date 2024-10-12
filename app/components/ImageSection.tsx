// components/ImageSection.js
export default function ImageSection() {
  return (
    <section className="relative flex justify-center items-center h-[600px] bg-gray-300 ">
      <div className="absolute bottom-4 text-white text-3xl">
        Revolutionizing Driver Safety
      </div>
      {/* Replace the static image with a GIF */}
      <img src="/images/abg.jpeg" alt="Driving Vitals GIF" className="h-full w-full object-cover" />
    </section>
  );
}
