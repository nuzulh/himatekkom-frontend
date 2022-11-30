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
        <p className="text-sm font-bold text-center text-secondary mt-2 md:text-lg">
          <i className="fa-regular fa-calendar mr-2" />1 - 4 Desember 2022
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
              maxHeight: "15rem",
            }}
            alt="kti"
            src={kti}
          />
          <p className="font-bold pt-4">Karya Tulis Ilmiah</p>
          <p className="text-secondary pb-4 text-sm">
            Biaya pendaftaran: <strong>10K</strong>/Orang
          </p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchAvoLbDEKsqtavYUgfC1lqyyeAqzFYTQuSbH0CWNwA2AvtA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-pen-clip mr-2" />
                Daftar
              </button>
            </a>
            <a href="/assets/docs/Karya-Tulis-Ilmiah-CMD-2022.pdf">
              <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-download mr-2" />
                Petunjuk Teknis
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              maxHeight: "15rem",
            }}
            alt="dsn"
            src={dsn}
          />
          <p className="font-bold pt-4">Desain Poster</p>
          <p className="text-secondary pb-4 text-sm">
            Biaya pendaftaran: <strong>10K</strong>/Orang
          </p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://bit.ly/DesainPosterCMD"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-pen-clip mr-2" />
                Daftar
              </button>
            </a>
            <a href="/assets/docs/Desain-Poster-CMD-2022.pdf">
              <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-download mr-2" />
                Petunjuk Teknis
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              maxHeight: "15rem",
            }}
            alt="typing"
            src={typing}
          />
          <p className="font-bold pt-4">Fast Typing</p>
          <p className="text-secondary pb-4 text-sm">
            Biaya pendaftaran: <strong>15K</strong>/Orang
          </p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://bit.ly/FastTypingCMD"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-pen-clip mr-2" />
                Daftar
              </button>
            </a>
            <a href="/assets/docs/Fast-Typing-CMD-2022.pdf">
              <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-download mr-2" />
                Petunjuk Teknis
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              maxHeight: "15rem",
            }}
            alt="ml"
            src={ml}
          />
          <p className="font-bold pt-4">Turnamen Mobile Legend</p>
          <p className="text-secondary pb-4 text-sm">
            Biaya pendaftaran: <strong>50k</strong>/Tim
          </p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://bit.ly/USKCOMPUTER"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-pen-clip mr-2" />
                Daftar
              </button>
            </a>
            <a href="/assets/docs/Mobile-Legend-CMD-2022.pdf">
              <button className="bg-primary shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-download mr-2" />
                Petunjuk Teknis
              </button>
            </a>
          </div>
        </div>
        <div className="p-4 my-4 md:p-8 flex items-center flex-col w-11/12 md:w-5/12 shadow-lg rounded-2xl bg-[white]">
          <img
            style={{
              maxHeight: "15rem",
            }}
            alt="seminar"
            src={seminar}
          />
          <p className="font-bold pt-4">Seminar Nasional</p>
          <p className="text-secondary pb-4 text-sm">
            Biaya pendaftaran: <strong>Gratis</strong>
          </p>
          <div className="w-full flex flex-col gap-2">
            <a
              href="https://forms.gle/cwEouaoX9E9mTHcFA"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue shadow-md hover:opacity-80 transition-all duration-300 text-[white] w-full py-2 rounded-lg">
                <i className="fa-solid fa-pen-clip mr-2" />
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
