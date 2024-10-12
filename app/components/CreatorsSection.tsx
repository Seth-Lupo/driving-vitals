// components/CreatorsSection.js
export default function CreatorsSection() {
    const creators = [
      { name: "Seth", img: "/images/abg.jpeg" },
      { name: "Benson", img: "/images/abg.jpeg" },
      { name: "Brian", img: "/images/abg.jpeg" },
    ];
  
    return (
      <section id="contact" className="py-12 bg-white">
        <h2 className="text-black text-4xl font-bold text-center mb-8">About the Creators</h2>
        <div className="flex justify-around">
          {creators.map((creator) => (
            <div key={creator.name} className="flex flex-col items-center">
              <img src={creator.img} alt={creator.name} className="w-[300px] h-[300px] rounded-full object-cover" />
              <div className="mt-4 text-xl">{creator.name}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  