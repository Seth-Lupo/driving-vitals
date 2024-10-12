// components/ImageSection.js
export default function ImageSection() {
    return (
      <section className="relative flex justify-center items-center h-[400px] bg-gray-300">
        <div className="absolute bottom-4 text-white text-3xl">
          Revolutionizing Driver Safety
        </div>
        <img src="/insert-image.jpg" alt="Driving Vitals Image" className="h-full w-full object-cover" />
      </section>
    );
  }
  