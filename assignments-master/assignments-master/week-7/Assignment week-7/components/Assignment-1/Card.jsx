import { Body } from "./Body";
import { Fotter } from "./Fotter";
import { Header } from "./Header";
import "./Card.css"
import { Photo } from "./Photo";

export function Card() {
    return (
        <span className="Card">
            <span>
                <Header className="Head" > </Header>
                <Photo />
                <Body className="Bod" />
                <Fotter className="Foot" />
            </span>
        </span>
    );
}