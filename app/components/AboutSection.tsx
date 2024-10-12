// components/AboutSection.js
'use client'

import { useEffect, useState, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`bg-white flex justify-center h-[100vh] w-[100vw] bg-slate-100 ${
        isVisible ? "animate-slide-in-left" : "opacity-0"
      }`}
    >
      <div className="w-1/2 mt-[225px]">
        <div
          className="flex flex-col items-center rounded-lg bg-slate-400 ml-[30px] justify-center"
        >
          <h2 className="text-black text-2xl font-bold">About Driving Vitals</h2>
          <p className="mt-4 pl-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est
            laudantium odio aperiam eos soluta iure sapiente ducimus quasi
            officia. Aliquid officiis odit sit, nam cum, sequi maxime laudantium
            doloribus accusamus nulla incidunt quae officia velit earum quia
            ullam aut illum tempore...
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img
          src="/images/abg.jpeg"
          alt="About Image"
          className="w-[500px] h-[300px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
