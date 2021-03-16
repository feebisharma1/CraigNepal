import React from "react";
import './main.scss';
import Card from "../cards/cards";

function Main(props){
    console.log("props:", props.cardList);
    return (
        <div className="column">
            <div className="cards-grid">
                <Card
                    jobs={props.cardList}
                />
            </div>
        </div>
    )

}

export default Main;