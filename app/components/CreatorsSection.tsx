// components/CreatorsSection.js
export default function CreatorsSection() {
    const creators = [
      { name: "Seth", img: "/creator1.jpg" },
      { name: "Benson", img: "/creator2.jpg" },
      { name: "Brian", img: "/creator3.jpg" },
    ];
  
    return (
      <section className="py-12 bg-white">
        <h2 className="text-black text-2xl font-bold text-center mb-8">About the Creators</h2>
        <div className="flex justify-around">
          {creators.map((creator) => (
            <div key={creator.name} className="flex flex-col items-center">
              <img src={creator.img} alt={creator.name} className="w-[100px] h-[100px] rounded-lg object-cover" />
              <div className="mt-4 text-xl">{creator.name}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  