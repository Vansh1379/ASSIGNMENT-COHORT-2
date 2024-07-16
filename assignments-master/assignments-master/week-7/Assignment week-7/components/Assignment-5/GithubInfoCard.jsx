import { useEffect, useState } from "react";
import axios from "axios";
import "./GithubInfoCard.css"

export function GithubInfoCard() {

    const [InputValue, setInputvalue] = useState();

    const [Username, setUsername] = useState();
    const [User, setUser] = useState();
    const [Userid, setUserid] = useState();
    const [UserCompany, setUserCompany] = useState();
    const [Userrepo, setuserrepo] = useState();
    const [UserTwitter, setUserTwitter] = useState();
    const [UserFollowers, setUserFollowers] = useState();
    const [UserFollowing, setUserFollowing] = useState();

    useEffect(() => {

        const URL = `https://api.github.com/users/${InputValue}`;
        axios.get(URL)
            .then((response) => {
                console.log(response.data);
                setUsername(response.data.name);
                setUser(response.data.login);
                setUserid(response.data.id);
                setUserCompany(response.data.company);
                setuserrepo(response.data.repos_url);
                setUserTwitter(response.data.twitter_username);
                setUserFollowers(response.data.followers);
                setUserFollowing(response.data.following);
            })
    }, [InputValue]);

    return (
        <div className="InfoCard">
            <h1 className="heading">Github Info Card</h1>
            <input type="text" name="InputBOX" placeholder="Enter Github Username" id="inputBox" onChange={(e) => {
                setInputvalue(e.target.value);
            }} />
            <button className="search">Search</button>
            <h3 className="info">Username :- {User}</h3>
            <h3 className="info">Nmae :- {Username}</h3>
            <h3 className="info">User Id :- {Userid}</h3>
            <h3 className="info">Company :- {UserCompany}</h3>
            <h3 className="info">Repos :- {Userrepo}</h3>
            <h3 className="info">Twitter :- {UserTwitter}</h3>
            <h3 className="info">Followers :- {UserFollowers}</h3>
            <h3 className="info">Following :- {UserFollowing}</h3>
        </div>
    );
}