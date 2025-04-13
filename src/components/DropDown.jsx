import React from "react";
import { useState } from "react";
import styles from './dropDown.module.css';
import { IoMdArrowDropdown } from "react-icons/io";

//DropDown component
const DropDown = ({items = []}) => {
    //created state for maintaining dropdown is open or not 
    const [isOpen , setIsOpen] = useState(false);
    
    //manipulating state according to the mouse hover
    const handleMouseEnter = () => {setIsOpen(true)};
    const handleMouseLeave = () => {setIsOpen(false)};
    //method to handle mouse click
    const handleMouseClick = () => {
        setIsOpen(false);
    };

    return(
        <div className={styles.container}>
        <div
        className={styles.dropDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <p className={styles.text}>Should you use a dropdown??</p>
            <button className={styles.button}>Select
            <span>
              <IoMdArrowDropdown color={"black"} fontSize={50} />
            </span>
            </button>
            
            {isOpen && (
                <ul className={styles.menu}>
                    {items.map((item,index)=>(
                        <li key={index}
                            className={styles.menuItem}
                            onClick={()=>handleMouseClick(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}

        </div>
        </div>
    )
}

export default DropDown;