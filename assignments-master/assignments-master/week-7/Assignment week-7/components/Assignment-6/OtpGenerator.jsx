import { FromComponent } from "./FormCompo";
import "./OtpGenerator.css"

export function OtpGenerator() {
    return (
        <div className="Maindiv">
            <h1 className="MainHeading">OTP Generator</h1>
            <FromComponent />
        </div>
    );
}