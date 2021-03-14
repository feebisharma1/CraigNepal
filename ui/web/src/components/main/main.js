import React from "react";
import './main.scss';
import Card from "../cards/cards";

function Main(){
    return (
        <div className="column">
            <div className="cards-grid">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )

}

export default Main;