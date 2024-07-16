import { useState } from "react"
import "./FormCompo.css"

export function FromComponent() {
    const [phoneNumber, setPhoneNumber] = useState("");

    function handlePhoneNumber() {

    }

    function handlePhoneSubmit() {

    }

    return (
        <div>
            <form onSubmit={handlePhoneSubmit}>
                <input
                    type="text"
                    onChange={handlePhoneNumber}
                    value={phoneNumber}
                    placeholder="Enter your phone number"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}