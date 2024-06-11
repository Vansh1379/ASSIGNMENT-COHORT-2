import { Body } from "./Body";
import { Fotter } from "./Fotter";
import { Header } from "./Header";
import "./Card.css"
import { Photo } from "./Photo";

export function Card() {
    return (
        <div className="Card">
            <div>
                <Header className="Head" > </Header>
                <Photo />
                <Body className="Bod" />
                <Fotter className="Foot" />
            </div>
        </div>
    );
}