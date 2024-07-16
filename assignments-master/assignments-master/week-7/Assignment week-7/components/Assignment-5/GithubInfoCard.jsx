import { useEffect, useState } from "react";
import axios from "axios";
import "./GithubInfoCard.css"

export function GithubInfoCard() {

    const [Username, setUsername] = useState();
    const [User, setUser] = useState();
    const [Userid, setUserid] = useState();

    useEffect(() => {
        axios.get("https://api.github.com/users/Vansh1379")
            .then((response) => {
                setUser(response.data.login);
                setUserid(response.data.id);
            })
    }, []);

    return (
        <div className="InfoCard">
            <h1 className="heading">Github Info Card</h1>
            <h3>Username :- {User}</h3>
            <h3>User Id :- {Userid}</h3>
        </div>
    );
}