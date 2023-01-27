import React from "react";
import imageHome from "./../img/image1.png";
import ornamen1 from "./../img/image2.png";
import ornamen2 from "./../img/image3.png";
import ornamen3 from "./../img/image4.png";
import logo from "./../img/logo.png";

const Home = (props) => {
  return (
    <div>
      <header className="mx-20 flex justify-between">
        <a className="flex items-center" href="#">
          <img className="mix-blend-multiply" src={logo} alt="Logo UINSA" />
          <span className="font-bold text-xl">Pusat Bisnis UINSA SBY</span>
        </a>
        <nav className="odd:even:px-4">
          <a className="font-bold" href="#beranda">
            BERANDA
          </a>
          <a className="font-bold" href="#layanan">
            LAYANAN
          </a>
          <a className="font-bold" href="#fitur">
            FITUR
          </a>
          <a className="font-bold" href="#kontak">
            KONTAK
          </a>
        </nav>
      </header>

      <div className="bg-gradient-to-r from-[#048853] to-[#000000de] w-full h-screen relative flex items-center text-white overflow-hidden">
        <img
          className="absolute bottom-0 right-0 z-10"
          src={imageHome}
          alt="Image TwinTower"
        />
        <img className="absolute top-0 left-0" src={ornamen1} alt="ornamen1" />
        <img
          className="absolute bottom-0 left-72"
          src={ornamen2}
          alt="ornamen2"
        />
        <img
          className="absolute bottom-0 left-96"
          src={ornamen3}
          alt="ornamen3"
        />
        <div className="w-1/2 z-10 px-20">
          <h1 className="text-5xl font-bold mb-5">
            Membantu temukan kebutuhan terbaik.
          </h1>
          <p className="mb-6 pr-28">
            <span className="font-bold">Pusat bisnis</span> hadir untuk temukan
            kebutuhan terbaik untukmu, untuk dijual ataupun disewa dengan sumber
            terpercaya.
          </p>
          <button className="bg-white rounded-sm p-3 text-green-700 font-bold hover:bg-green-400 hover:text-white">
            Temukan Kebutuhan
          </button>
        </div>
      </div>
      <div className="h-screen">
        <div className="[:nth-of-type(even)&]:bg-red-700">
          <p>This paragraph is the first child of its parent (div).</p>
          <p>This paragraph is the first child of its parent (div).</p>
          <p>This paragraph is not the first child of its parent (div).</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
