import { Button } from "./Button";
import "./BackgroundRender.css"

export function BackgroundRender() {
    return (
        <div className="Background">
            <Button color="red" />
            <Button color="Yellow" />
            <Button color="Balck" />
            <Button color="Purple" />
            <Button color="green" />
            <Button color="blue" />
            <Button color="default" />
        </div>
    );
}