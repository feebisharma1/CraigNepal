import React from "react";
import './main.scss';
import Card from "../cards/cards";
import RequestForm from "../sidebar/post/RequestForm";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function Main(props){
    console.log("props:", props.cardList);
    const isPost = true;
    const isCard = true;
    return (
        // <div className="column">
        //     <div className="cards-grid">
        //
        //     </div>
        // </div>
        <Container>
            <Typography component="div" style={{ backgroundColor: '#F5F5F5', height: '100vh', width: '150vh' }}>
                <h1>Categories</h1>
                {isPost &&
                    <RequestForm/>
                }
                {
                 isCard &&
                 <Card
                     jobs={props.cardList}
                 />
                }
            </Typography>
        </Container>
    )
}

export default Main;