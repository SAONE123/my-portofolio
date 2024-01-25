import { useState } from "react";
import Firstside from "./component/First_side";
import Secondside from "./component/second_side";

function App() {
  const [onclickdata, setonclickdata] = useState(false);
  const handledatas = (data) => {
    setonclickdata(data);
  };
  return (
    <>
      <div>
        <Firstside parentdata={handledatas} />
        {onclickdata && <Secondside />}
      </div>
    </>
  );
}

export default App;
