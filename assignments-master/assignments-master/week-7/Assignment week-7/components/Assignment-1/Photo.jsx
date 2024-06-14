import img from "../../src/assets/images/Photo.png"

export function Photo() {
    return (
        <div className="photo">
            <div className="pho">
                <img src={img} alt="" />
            </div>
        </div>
    );
}