import { useState } from "react";
import Navbar from "./nonmaincomponent/navbar";
import TextAnimation from "./nonmaincomponent/textanima";
import React from "react";
import ReactPlayer from "react-player";
function Firstside({ parentdata }) {
  const [onclickdatas, setonclickdatas] = useState(true);
  const senddata = () => {
    parentdata(onclickdatas);
  };
  return (
    <>
      <div className="vidios">
        <ReactPlayer
          url="Vidio/vidio.mp4"
          playing
          loop
          muted
          width="360%"
          height="unset"
          className="vedeoos"
          style={{
            objectFit: "cover", // This property ensures the video covers the entire container without borders
          }}
        />
      </div>
      <div>
        <Navbar />
        <div className="relative flex down">
          {/*ITEM 1*/}
          <div className="my_image">
            <img src="/my_image.png" alt="err" />
          </div>
          {/* item 2 */}
          <div className="w-[50vw]">
            <div className="lightbulb">
              <img src="/lightbulb.png" alt="err" />
              <div className="w-[200px]"></div>
            </div>
            <TextAnimation />
            <p className="text-[2vw] text-justify my-desk">
              I'm a student in Universitas Sultan Ageng Tirtayasa Collage in
              Majoring Agribusiness that i have chance for completing Kampus
              Merdeka Porgram that have majoring skill in web develpment, it was
              good that i have web development skill before joining this
              majority, hope that you can help me improve my skill.
            </p>
            <div className="flex gap-5 icons">
              <a href="https://github.com/SAONE123">
                <img src="/logos/github.svg" alt="err" width={25} height={25} />
              </a>
              <a href="https://www.linkedin.com/in/alfian-setyobudi-710b521b7/">
                <img
                  src="/logos/linkedin.svg"
                  alt="err"
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://www.instagram.com/alfian_1920/">
                <img
                  src="/logos/instagram.svg"
                  alt="err"
                  width={25}
                  height={25}
                />
              </a>
              <a href="mailto:titanalfian112@gmail.com">
                <img src="/logos/mail.svg" alt="err" width={25} height={25} />
              </a>
              <a href="/RESUME.pdf" download="RESUME.pdf">
                <div className="w-[130px] h-[40px] download rounded-full flex">
                  <img
                    src="/logos/cloud.svg"
                    alt="err"
                    width={25}
                    height={25}
                    className="m-2"
                  />
                  <p>RESUME</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-[18vh] right-[36vw] text-[32px] follow">
        <p onClick={senddata} className="cursor-pointer">
          Follow me
        </p>
        <img
          src="/logos/arrowicon.svg"
          alt="err"
          width={200}
          height={200}
          className="absolute right-[60%]"
        />
      </div>
    </>
  );
}

export default Firstside;
