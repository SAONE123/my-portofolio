import Cards from "../component/nonmaincomponent/Card";
import Navbar from "../component/nonmaincomponent/navbar";
import Footer from "../component/nonmaincomponent/footer";
import React from "react";
function Project() {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="absolute top-[15vh] text-[40px] w-[100vw] text-center">
          My project
        </h1>
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Project;
