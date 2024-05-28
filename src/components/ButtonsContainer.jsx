import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    ".",
    "="
  ];
  return (
    <div id={styles.buttonscontainer}>
      {buttonNames.map((x) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(x)}
          key={x}
        >
          {x}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
