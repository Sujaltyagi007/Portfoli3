import Image from "next/image";

export default function Home() {
  return (
    <section className="h-dvh relative flex justify-center transform-none items-center overflow-hidden ">
      <div className="w-[calc(100vw-70vw)] fixed -left-[10vw] -top-5 h-[150vh] bg-[#ffb400] -rotate-[15deg]" />
      <div className=" fixed h-[calc(100vh-5vh)]  border rounded-2xl overflow-hidden w-[35vw] left-10">
        <Image src="/logo.png" alt="" width={200} height={200} />
      </div>
      <div className="flex flex-col justify-center items-start gap-3 ml-[33%] max-w-[40vw] ">
        <h2 className=" text-lg">Hi There!</h2>
        <h1 className="text-3xl font-bold">
          I'm <span className="text-[#ffb400]">Sujal Tyagi</span>
        </h1>
        <p>
          A full-stack web developer dedicated to building seamless, scalable,
          and user-centered web applications. With a passion for both front-end
          and back-end development, I focus on crafting high-performance
          software solutions that enhance user experience and drive business
          success.
        </p>
      </div>
    </section>
  );
}
