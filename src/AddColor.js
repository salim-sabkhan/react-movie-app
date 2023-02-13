import { useState } from "react";
import { Colorbox } from "./Colorbox";

export function AddColor() {
  // const color = "orange";
  const [color, setColor] = useState("orange");

  const [colorList, setColorList] = useState(["skyblue","orange","green","yellow"])

// const colorList = ["orange","green","yellow"]

// onColor => setChange => Colors get updated

  const styles = {
    fontSize: "25px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
      {/* onChange = In camel case */}
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        type="text"
        value={color} />

        <button
        onClick={()=>setColorList([...colorList,color])}
        >Add Color</button>
    </div>
    {colorList.map((clr)=>(
      <Colorbox color={clr}/>
    ))}
        
    </div>
  );
}
