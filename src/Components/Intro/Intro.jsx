import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front-End Developer", "UI/UX Designer", "Inde Gamer"],
    });
  }, []);

  return (
    <div className="Intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf1975137504807.620c824516dc8.png"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm </h2>
          <h1>Rajiv Rzyuk</h1>
          <h3>
            -- <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="./assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
