import { useState } from "react";
import "./App.css";
import Colors from "./Components/Colors";
import LightToggle from "./Components/LightToggle";

const colorData = ["aliceblue", "blue", "yellow", "green", "red", "orange"];

const lightDark = [
  {
    title: "Light Mode",
    color: "aliceblue",
    textColor: "#222",
  },
  {
    title: "Dark Mode",
    color: "#222",
    textColor: "aliceblue",
  },
];

// function App() {
//   const [color, setColor] = useState(colorData[0]);
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: color,
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "1rem",
//       }}>
//       {colorData.map((d, i) => (
//         <Colors color={d} setColor={setColor} key={i} />
//       ))}
//     </div>
//   );
// }

function App() {
  const [color, setColor] = useState(lightDark[1].color);
  const [textColor, setTextColor] = useState(lightDark[0].color);
  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}>
      <div style={{ color: textColor }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat
        nunc eu lorem pulvinar, ac ullamcorper dolor fermentum. Integer
        fermentum turpis faucibus sem scelerisque, in bibendum neque consequat.
        Morbi eu.
      </div>
      <div>
        {lightDark.map((d, i) => (
          <LightToggle
            data={d}
            setColor={setColor}
            setTextColor={setTextColor}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
