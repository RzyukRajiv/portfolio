import "./PortfolioList.scss";

export default function PortfolioList({ id, title, active, setSelect }) {
  return (
    <li
      className={active ? "PortfolioList active" : "PortfolioList"}
      onClick={() => setSelect(id)}
    >
      {title}
    </li>
  );
}
