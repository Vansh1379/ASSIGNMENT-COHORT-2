import { useState } from "react"
import "./OtpInput.css"

export function OtpInput({ length, onOtpSubmit }) {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    console.log(otp);

    return (
        <div>

        </div>
    )
}