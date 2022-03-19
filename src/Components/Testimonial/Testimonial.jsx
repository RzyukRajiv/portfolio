import "./Testimonial.scss";

export default function Testimonial() {
  const test = [
    {
      id: 1,
      name: "Arul Raj",
      title: "Asst Manager From TSC",
      img: "https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
      icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4a132f137507271.620c908934b69.png",
    },
    {
      id: 2,
      name: "Swarnamala Prasanna",
      title: "Team Lead From Sify Tech",
      img: "https://img.freepik.com/free-vector/beautiful-women-excited-expressions_96037-110.jpg",
      icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4a132f137507271.620c908934b69.png",
      featured: true,
    },
    {
      id: 3,
      name: "Aarthi Manick",
      title: "Tech Lead From CTS",
      img: "https://img.freepik.com/free-vector/indian-woman-presenting-something-with-two-hands_102172-144.jpg?size=338&ext=jpg",
      icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4a132f137507271.620c908934b69.png",
    },
  ];
  return (
    <div className="Testimonial" id="testimonial">
      <h1>Testimonial</h1>
      <div className="container">
        {test.map((t) => (
          <div className={t.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={t.img} className="user" alt="" />
              <img src={t.icon} className="right" alt="" />
            </div>
            <div className="center bottom">
              <h3>{t.name}</h3>
              <h4>{t.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
