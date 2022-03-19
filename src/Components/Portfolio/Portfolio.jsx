import "./Portfolio.scss";
import { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  artPortfolio,
  brandingPortfolio,
} from "../../data";

export default function Portfolio() {
  const [select, setSelect] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "mobile app",
      title: "Mobile App",
    },
    {
      id: "art",
      title: "Art Work",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web app":
        setData(webPortfolio);
        break;
      case "mobile app":
        setData(mobilePortfolio);
        break;
      case "art":
        setData(artPortfolio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;

      default:
        setData(featuredPortfolio);
        break;
    }
  }, [select]);

  return (
    <div className="Portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={select === item.id}
            setSelect={setSelect}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
