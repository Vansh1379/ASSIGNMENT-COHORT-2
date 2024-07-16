import { useEffect, useState } from "react";
import axios from "axios";
import "./GithubInfoCard.css"

export function GithubInfoCard() {

    const [Username, setUsername] = useState();
    
    useEffect(() => {
        axios.get("https://api.github.com/users/Vansh1379")
            .then((response) => {
                console.log(response.data);
                console.log(response.data.login);
                console.log(response.data.id);
            })
    }, []);

    return (
        <div className="InfoCard">
            <h1 className="heading">Github Info Card</h1>
        </div>
    );
}