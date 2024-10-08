import Image from "next/image";
import CTA from "./_components/CTA";
import CTA2 from "./_components/CTA2";
import Contributions from "./_components/Contributions";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <div className="p-10 object-center bg-cover mx-auto text-white text-center bg-navbar-bg md:bg-[url('/banner_bg.png')]">
          <div>
            <Image
              src={"/headPage.webp"}
              alt=""
              height={350}
              width={350}
              className=" mx-auto"
            />
            <p className="mt-10 text-xl">Empower. Innovate. Transform.</p>
          </div>
        </div>
        {/* <div className="flex">
          <Image src={"/pic1.webp"} height={1000} width={1000} alt="" className="w-full" />
          <div className="flex flex-col justify-start items-center p-28 pl-2">
            <h1 className="text-4xl font-Josefin-Sans">Working together to create a better tomorrow.</h1>
            <p className="m-5 text-xl">
              Whether its navigating the complexities of the legal system or
              improving the coffee experience - we begin with listening and
              putting the user at the centre of our design to collaborate.
            </p>
          </div>
        </div> */}
        <CTA />
        <CTA2 />
        <Contributions />
      </section>
      <Footer />
    </div>
  );
}
