import { useState } from "react"
import "./FormCompo.css"

export function FromComponent() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    };

    function handlePhoneSubmit(event) {
        event.preventDefault();

        // we will use regex for check the phine number is valid or not 
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Fucking Invalid Phone Number Bruh!");
            return;
        }
        setShowOtpInput(true);
    };

    return (
        <div>
            {!showOtpInput ? <form onSubmit={handlePhoneSubmit}>
                <input
                    type="text"
                    onChange={handlePhoneNumber}
                    value={phoneNumber}
                    placeholder="Enter your phone number"
                />
                <button type="submit">Submit</button>
            </form> : <div>
                <h1>Enter OTP Sent to {phoneNumber}</h1>
            </div>}
        </div>
    )
}