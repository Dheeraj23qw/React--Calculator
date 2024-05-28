import styles from "./App.module.css"; // ish file se style use krne ke liye apko style. use krni padegi
import ButtonsContainer from "./components/buttonscontainer";
import Display from "./components/display";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState("");

  const onButtonClick = (x) => {
    if (x === "c") {
      setcalval(" ");
    } else if (x === "=") {
      setcalval(eval(calval));
    } else {
      setcalval(calval + x);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayCal={calval}></Display>
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
