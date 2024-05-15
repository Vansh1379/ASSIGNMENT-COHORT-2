import "./BussinessCard.css"
import { Button } from "./Buttons";
import { Heading } from "./Heading";
import { Interest } from "./Interest";
export function BussinessCard() {
    return (
        <div>
            <div className="BussinessCard">
                <Heading />
                <Interest />
                <Button />
            </div>
        </div>
    );
}