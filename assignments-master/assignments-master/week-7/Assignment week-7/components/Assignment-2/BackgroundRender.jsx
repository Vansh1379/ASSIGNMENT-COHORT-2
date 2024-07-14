import { Button } from "./Button";
import "./BackgroundRender.css"

import { useState } from "react"
export function BackgroundRender() {
    const [background, setBackground] = useState([{
        id: 1,
        color: "red"
    }, {
        id: 2,
        color: "blue"
    }, {
        id: 3,
        color: "green"
    }, {
        id: 4,
        color: "yellow"
    }, {
        id: 5,
        color: "black"
    }, {
        id: 6,
        color: "white"
    }, {
        id: 7,
        color: "pink"
    }])
    return (
        <div className="Background">
            {background.map((background) => (<button key={background.id} color={background.color} />))}
            <Button color="default" />
        </div>
    );
}