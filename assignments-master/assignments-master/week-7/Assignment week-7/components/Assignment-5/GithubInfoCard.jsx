import { useEffect, useState } from "react";
import axios from "axios";
import "./GithubInfoCard.css"

export function GithubInfoCard() {

    const [Username, setUsername] = useState();
    const [User, setUser] = useState();
    const [Userid, setUserid] = useState();
    const [UserCompany, setUserCompany] = useState();
    const [Userrepo, setuserrepo] = useState();

    useEffect(() => {
        axios.get("https://api.github.com/users/Vansh1379")
            .then((response) => {
                setUsername(response.data.name);
                setUser(response.data.login);
                setUserid(response.data.id);
                setUserCompany(response.data.company);
                setuserrepo(response.data.repos_url);
            })
    }, []);

    return (
        <div className="InfoCard">
            <h1 className="heading">Github Info Card</h1>
            <h3>Username :- {User}</h3>
            <h3>Nmae :- {Username}</h3>
            <h3>User Id :- {Userid}</h3>
            <h3>Company :- {UserCompany}</h3>
            <h3>Repos :- {Userrepo}</h3>
        </div>
    );
}