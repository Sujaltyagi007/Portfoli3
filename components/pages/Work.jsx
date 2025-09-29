"use client";
import { cn } from "@/lib/utils";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import { ZoomParallax } from "../zoom-parallax";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Work() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Modern architecture building",
    },
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Urban cityscape at sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Abstract geometric pattern",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Mountain landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Minimalist design elements",
    },
    {
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Ocean waves and beach",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Forest trees and sunlight",
    },
  ];
  const text = useRef(null);
  const Box = useRef(null);
  const Hand = useRef(null);

  useGSAP(
    () => {
      gsap.to(text.current, {
        z: -1000,
        fontSize: "3vw",
        lineHeight: "45px",
        scrollTrigger: {
          trigger: text.current,
          start: "top 70%",
          end: "+=400",
          scrub: true,
        },
      });
    },
    { scope: Box }
  );

  return (
    <main className="min-h-screen w-full overflow-hidden md:overflow-visible ">
      <div className="min-h-[calc(100vh-7vh)] flex  justify-center items-center ">
        <p
          ref={Hand}
          className=" w-[80vw] md:w-[60vw] text-center text-[1.2rem] md:text-[2.5rem] font-[600] "
        >
          <span>👋</span> Hi, I'm a Frontend Developer based in Delhi, India. I
          specialize in building beautiful, interactive,{" "}
          <span className="bg-[#ffb400] text-nowrap rounded-2xl px-2 ">and user-focused interfaces.</span> What excites me most is
          creating seamless, impactful experiences that users can connect with
          and enjoy.
        </p>
      </div>
      <div ref={Box} className=" flex items-center justify-center h-fit">
        <h1
          ref={text}
          className=" text-[18vw] perspective-distant transform-3d text-nowrap uppercase text-center flex flex-col h-dvh justify-center font-bold "
        >
          What I've been
          <span className=" text-[#ffb400] text-nowrap ">Working On</span>
        </h1>
      </div>
      <ZoomParallax images={images} />
      <div className="h-[50vh]" />
    </main>
  );
}
