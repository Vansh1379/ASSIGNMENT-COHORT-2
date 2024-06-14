import img from "../../src/assets/images/Photo.png"
import "./Photo.css"

export function Photo() {
    return (
        <div className="photo">
            <div className="pho">
                <img src={img} alt="" />
            </div>
        </div>
    );
}