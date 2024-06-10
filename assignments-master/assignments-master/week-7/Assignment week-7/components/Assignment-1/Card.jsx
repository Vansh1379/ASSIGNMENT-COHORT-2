import { Body } from "./Body";
import { Fotter } from "./Fotter";
import { Header } from "./Header";
import "./Card.css"

export function Card() {
    return (
        <div className="Card">
            <Header className="Head" > </Header>
            <Body  className="Bod"/>
            <Fotter className="Foot"/>
        </div>
    );
}