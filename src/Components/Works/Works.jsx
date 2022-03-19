import "./Works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5f5d66137509263.620c99de051cb.png",
      title: "Web Design",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c7cab136122901.61f3a87d35b23.jpg",
    },
    {
      id: "2",
      icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/5123d4137507271.620c908934495.png",
      title: "Mobile App UI",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0733bd136397163.61f913c4976fe.jpg",
    },
    {
      id: "3",
      icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/205999137507271.620c908932eb1.png",
      title: "Responsive",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d863ce136398163.61f9175b23c81.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };

  return (
    <div className="Works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/272731137507271.620c908932818.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/272731137507271.620c908932818.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
