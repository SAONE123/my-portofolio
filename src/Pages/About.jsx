import Slides from "../component/nonmaincomponent/Slideshow";
import Navbar from "../component/nonmaincomponent/navbar";
var dummydata = [
  {
    id: 1,
    imgUrl: "/serti/algoritma.png",
    content: "Sertivicate from Hacktivate on Next Algoritma",
    pdf: "/serti/algoritma.pdf",
  },
  {
    id: 2,
    imgUrl: "/serti/DOM.png",
    content: "Sertivicate from Hacktivate on DOM",
    pdf: "/serti/DOM.pdf",
  },
  {
    id: 3,
    imgUrl: "/serti/CSS.png",
    content: "Sertivicate from Hacktivate on Materialize CSS",
    pdf: "/serti/CSS.pdf",
  },
  {
    id: 3,
    imgUrl: "/serti/Webdev.png",
    content: "Sertivicate from Hacktivate on Webdev Kampus Merdeka",
    pdf: "/serti/Webdev.pdf",
  },
];
function About() {
  return (
    <>
      <Navbar />
      <div>
        <Slides slides={dummydata} />
      </div>
    </>
  );
}

export default About;
