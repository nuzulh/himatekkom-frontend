/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import events from "../../data/events";
import kti from "../../assets/img/cmd/kti.png";
import dsn from "../../assets/img/cmd/dsn.png";
import typing from "../../assets/img/cmd/typing.png";
import ml from "../../assets/img/cmd/ml.png";
import seminar from "../../assets/img/cmd/seminar.png";

const Cmd = () => {
  const link = useLocation().pathname.split("/").pop();
  const [data, setData] = useState({
    title: "",
    detail: "",
    date: "",
  });

  useEffect(() => {
    const event = events.filter((item) => item.link === link)[0];
    setData(event);
  }, []);

  return (
    <main>
      <div className="flex flex-col md:pt-20 items-center">
        <p className="text-xl text-secondary">Event - Event</p>
        <p className="text-2xl font-bold text-center text-primary md:text-4xl">
          {data.title}
        </p>
      </div>
      <p className="text-center py-5 text-primary text-sm md:text-lg">
        {data.detail}
      </p>
      <p className="text-center pb-10">
        <i>
          "Road to new world : a step into the future technologies with AR/VR"
        </i>
      </p>
      <div className="w-12/12 flex items-center justify-center gap-4 flex-wrap">
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              height: "16rem",
            }}
            alt="kti"
            src={kti}
          />
          <p className="font-bold p-4">Karya Tulis Ilmiah</p>
          <div className="w-full flex flex-col gap-2">
            <a href="https://bit.ly/KTICMD" target="_blank" rel="noreferrer">
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Daftar
              </button>
            </a>
            <a href="/assets/docs/Karya-Tulis-Ilmiah-CMD-2022.pdf">
              <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Petunjuk Teknis
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              height: "16rem",
            }}
            alt="dsn"
            src={dsn}
          />
          <p className="font-bold p-4">Desain Poster</p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://bit.ly/DesainPosterCMD"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Daftar
              </button>
            </a>
            <a href="/assets/docs/Desain-Poster-CMD-2022.pdf">
              <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Petunjuk Teknis
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              height: "16rem",
            }}
            alt="typing"
            src={typing}
          />
          <p className="font-bold p-4">Fast Typing</p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://bit.ly/DesainPosterCMD"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Daftar
              </button>
            </a>
            <a href="/assets/docs/Fast-Typing-CMD-2022.pdf">
              <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Petunjuk Teknis
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              height: "16rem",
            }}
            alt="ml"
            src={ml}
          />
          <p className="font-bold p-4">Mobile Legend</p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://bit.ly/USKCOMPUTER"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Daftar
              </button>
            </a>
            <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
              Petunjuk Teknis
            </button>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              height: "16rem",
            }}
            alt="seminar"
            src={seminar}
          />
          <p className="font-bold p-4">Seminar Nasional</p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://forms.gle/cwEouaoX9E9mTHcFA"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                Daftar
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cmd;
