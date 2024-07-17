import { useState } from "react"
import "./OtpInput.css"

export function OtpInput({ length, onOtpSubmit }) {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    console.log(otp);

    function handleChange(value) {

    }

    function handleClick() {

    }

    function handleKeyDown() {

    }

    return (
        <div>
            {
                otp.map((value, index) => {
                    return <input key={index} type="text" value={value}
                        onChange={() => handleChange(index, e)}
                        onClick={() => handleClick(index)}
                        onKeyDown={() => handleKeyDown(index, e)}
                        className="otpInput"
                    />
                })
            }
        </div>
    )
}