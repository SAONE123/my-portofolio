import Footer from "./nonmaincomponent/footer";
import SkillBar from "./nonmaincomponent/skillanimation";
function Secondside() {
  const skilldata = [
    { name: "HTML", level: 90, color: "#e74c3c" },
    { name: "CSS", level: 90, color: "#2ecc71" },
    { name: "JavaScript", level: 70, color: "#f39c12" },
    { name: "PHP", level: 60, color: "yellow" },
    { name: "React Js", level: 85, color: "darkBlue" },
    { name: "Next Js", level: 50, color: "darkGreen" },
    { name: "Mysql", level: 50, color: "darkRed" },
    { name: "VPC / VPS", level: 40, color: "Grey" },
  ];
  return (
    <>
      <div className="w-[100vw] h-[100vh] right-0 mt-[45vh] absolute bg-black">
        <div className="second-box my-auto">
          <div className="w-[40%]">
            ``
            <p className="text-[25px] text-center font-serif ">My Skill</p>
            <SkillBar skills={skilldata} />
          </div>
          <p className="motiv">"DON'T REST UNTIL GOD CALL YOU TO REST"</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Secondside;
