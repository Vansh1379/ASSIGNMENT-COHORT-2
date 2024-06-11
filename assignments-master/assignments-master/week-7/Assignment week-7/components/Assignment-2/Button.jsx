import "./Button.css"

export function Button({ color }) {
    return (
        <div>
            <button className="Button">{color}</button>
        </div>
    );
}