import Image from "next/image";
import CTA from "./_components/CTA";
import CTA2 from "./_components/CTA2";
import Contributions from "./_components/Contributions";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Banner from "./_components/Banner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <Banner />
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
