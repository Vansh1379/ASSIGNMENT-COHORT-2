import { useState } from "react";
import "./Button.css";

export function Button({ id, color }) {
    const [currentColor, setCurrentColor] = useState('cream');

    const handleClick = () => {
        switch (color) {
            case 'red':
                setCurrentColor('red');
                break;
            default:
                setCurrentColor('white');
                break;
        }
    };

    return (
        <div style={{ backgroundColor: currentColor }}>
            <button onClick={handleClick} className={color}>{color}</button>
        </div>
    );
}
