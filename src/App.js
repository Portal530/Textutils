import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [aboutMode, setAboutMode] = useState("light")

  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Dark Mode");
  const [textboxColor, setTextboxColor] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [alert, setAlert] = useState(null);

  function showAlert(message, typ) {
    setAlert({
      msg: message,
      typ: typ,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggalMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(52 53 65)";
      document.body.style.color = "rgb(209 213 219)";
      setBtnText("Light Mode");
      setTextboxColor({
        backgroundColor: "rgb(78 80 92)",
        color: "white",
        
      })
      setAboutMode({
        color:"white",
        backgroundColor: "rgb(78 80 92)",
      });
      showAlert("Dark mode has been enabled", "warning");
      document.title = "Textutils - Dark Mode";
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);
      setInterval(() => {
        document.title = "Best Textutils Now";
      }, 1900);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setBtnText("Dark Mode");
      setTextboxColor({
        backgroundColor: "white",
        color: "black",
      });
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
      setInterval(() => {
        document.title = "Install Textutils Now";
      }, 1500);
      setInterval(() => {
        document.title = "Best Textutils Now";
      }, 1900)
      setAboutMode({
        color:"black",
        backgroundColor:"white"
      });
    }
  }

  return (
    <>
      <Router>
        <Navbar
          placeholdertext="Search"
          title="Textutils"
          mode={mode}
          toggalMode={toggalMode}
          btnText={btnText}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/About" element={<About aboutMode={aboutMode} />}></Route>
          <Route
            exact
            path="/"
            element={
              <Textform showAlert={showAlert} textboxColor={textboxColor} />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
