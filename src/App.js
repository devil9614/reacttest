import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

// function App() {
//   const [color, setColor] = useState(lightDark[1].color);
//   const [textColor, setTextColor] = useState(lightDark[0].color);
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: color,
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "1rem",
//       }}>
//       <div style={{ color: textColor }}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat
//         nunc eu lorem pulvinar, ac ullamcorper dolor fermentum. Integer
//         fermentum turpis faucibus sem scelerisque, in bibendum neque consequat.
//         Morbi eu.
//       </div>
//       <div>
//         {lightDark.map((d, i) => (
//           <LightToggle
//             data={d}
//             setColor={setColor}
//             setTextColor={setTextColor}
//             key={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cpassword, setCpassword] = useState("");

//   const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

//   const validate = () => {
//     if (
//       validateEmail(email) &&
//       password === cpassword &&
//       password.length >= 8
//     ) {
//       toast.success("perfect form");
//     } else {
//       toast.error("error wala form");
//     }
//   };
//   return (
//     <>
//       <ToastContainer />
//       <input
//         type="text"
//         placeholder="email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="cpassword"
//         onChange={(e) => setCpassword(e.target.value)}
//       />

//       <button onClick={validate}>Submit</button>
//     </>
//   );
// }

function App() {
  const [color, setColor] = useState(colorData[0]);
  const [img, setImg] = useState();
  const fetchData = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random").then(
      (res) => res.json()
    );
    setImg(data.message);
  };
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
      <button onClick={fetchData}>fetch</button>
      <img src={img} alt={img} />
    </div>
  );
}

export default App;
