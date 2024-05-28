

import styles from "./display.module.css"

// display function

const Display=({displayCal})=>{
    
    return  <input className={styles.display} type="text"  value={displayCal} readOnly></input>
};

export default Display;